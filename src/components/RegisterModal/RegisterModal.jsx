import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Modal } from "../Modal/Modal";
import { useForm } from "../../hooks/useForm";
import * as auth from "../../utils/auth";
import { setToken } from "../../utils/token";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

const RegisterModal = ({
  isOpen,
  handleClose,
  onLoginClick,
  handleSubmit,
  buttonText,
  setActiveModal,
}) => {
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const navigate = useNavigate();
  const { setCurrentUser, setIsLoggedIn } = useContext(CurrentUserContext);
  const initialRegisterFormValues = {
    email: "",
    password: "",
    username: "",
  };

  const { formValues, handleFormChange, errors, setFormValues } = useForm(
    initialRegisterFormValues
  );

  useEffect(() => {
    const hasErrors = errors.email || errors.password || errors.username;
    const isFormEmpty =
      !formValues.email || !formValues.password || !formValues.username;
    setButtonDisabled(hasErrors || isFormEmpty);
  }, [formValues, errors]);

  useEffect(() => {
    if (isOpen) {
      setFormValues(initialRegisterFormValues);
    }
  }, [isOpen, setFormValues]);

  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    const makeRequest = () => {
      if (!formValues.email || !formValues.username || !formValues.password) {
        return Promise.reject("Must complete all fields.");
      }
      return auth
        .register({
          name: formValues.username,
          email: formValues.email,
          password: formValues.password,
        })
        .then(() => {
          return auth.authorize(formValues.email, formValues.password);
        })
        .then((data) => {
          if (data.token) {
            setToken(data.token);
            return auth.getUserInfo(data.token);
          } else {
            return Promise.reject("Registration failed.");
          }
        })
        .then((user) => {
          setCurrentUser(user);
          setIsLoggedIn(true);
          setActiveModal("register-success-modal");
        })
        .catch((error) => {
          console.error(error);
        })
        .finally(() => {
          setFormValues(initialRegisterFormValues);
        });
    };
    handleSubmit(makeRequest);
  };

  return (
    <Modal title="Sign up" isOpen={isOpen} handleClose={handleClose}>
      <form
        className="modal__form"
        id="modal__register-form"
        name="modal-register-form"
        onSubmit={handleRegisterSubmit}
      >
        <label htmlFor="modal__input-email" className="modal__label">
          Email
          <input
            type="email"
            className="modal__input"
            name="email"
            id="modal__input-register-email"
            placeholder="Enter email"
            required
            minLength="6"
            maxLength="50"
            value={formValues.email}
            onChange={handleFormChange}
          />
          <span
            className={`modal__input-error ${
              errors.email != "" ? "modal__error_visible" : ""
            }`}
            id="modal__input-email-error"
          >
            {errors.email}
          </span>
        </label>
        <label htmlFor="modal__input-password" className="modal__label">
          Password
          <input
            type="password"
            className="modal__input"
            name="password"
            id="modal__input-register-password"
            placeholder="Enter password"
            required
            minLength="8"
            maxLength="40"
            value={formValues.password}
            onChange={handleFormChange}
          />
          <span
            className={`modal__input-error ${
              errors.password != "" ? "modal__error_visible" : ""
            }`}
            id="modal__input-password-error"
          >
            {errors.password}
          </span>
        </label>
        <label htmlFor="modal__input-username" className="modal__label">
          Username
          <input
            type="text"
            className="modal__input"
            name="username"
            id="modal__input-username"
            placeholder="Enter your username"
            minLength="1"
            maxLength="40"
            value={formValues.username}
            onChange={handleFormChange}
          />
          <span
            className={`modal__input-error ${
              errors.username != "" ? "modal__error_visible" : ""
            }`}
            id="modal__input-name-error"
          >
            {errors.username}
          </span>
        </label>
        <button
          type="submit"
          className={`modal__submit ${
            buttonDisabled ? "modal__submit_disabled" : ""
          }`}
          disabled={buttonDisabled}
        >
          {buttonText}
        </button>
        <button type="button" className="modal__toggle" onClick={onLoginClick}>
          <span className="modal__toggle-text">or</span> Sign in
        </button>
      </form>
    </Modal>
  );
};

export default RegisterModal;
