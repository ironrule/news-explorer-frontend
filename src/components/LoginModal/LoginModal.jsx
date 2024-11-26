import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Modal } from "../Modal/Modal.jsx";
import { useForm } from "../../hooks/useForm";
import * as auth from "../../utils/auth";
import { setToken } from "../../utils/token.js";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

const LoginModal = ({
  isOpen,
  handleClose,
  onRegisterClick,
  handleSubmit,
  buttonText,
}) => {
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const navigate = useNavigate();
  const { setCurrentUser, setIsLoggedIn } = useContext(CurrentUserContext);
  const initialLoginFormValues = {
    email: "",
    password: "",
  };

  const { formValues, handleFormChange, errors, setFormValues } = useForm(
    initialLoginFormValues
  );

  useEffect(() => {
    const hasErrors = errors.email || errors.password;
    const isFormEmpty = !formValues.email || !formValues.password;
    setButtonDisabled(hasErrors || isFormEmpty);
  }, [formValues, errors]);

  useEffect(() => {
    if (isOpen) {
      setFormValues(initialLoginFormValues);
    }
  }, [isOpen, setFormValues]);

  const handleLoginSubmit = (e) => {
    e.preventDefault;
    const makeRequest = () => {
      if (!formValues.email || !formValues.password) {
        return Promise.reject("Must provide email and password.");
      }
      return auth
        .authorize(formValues.email, formValues.password)
        .then((data) => {
          if (data.token) {
            setToken(data.token);
            return auth.getUserInfo(data.token);
          } else {
            return Promise.reject("Invalid email or password.");
          }
        })
        .then((user) => {
          setCurrentUser(user);
          setIsLoggedIn(true);
          closeActiveModal();
        })
        .catch((error) => {
          console.error(error);
        })
        .finally(() => {
          setFormValues(initialLoginFormValues);
          navigate("/");
        });
    };
    handleSubmit(makeRequest);
  };

  return (
    <Modal title="Sign in" isOpen={isOpen} handleClose={handleClose}>
      <form
        className="modal__form"
        id="modal__login-form"
        name="modal-login-form"
        onSubmit={handleLoginSubmit}
      >
        <label htmlFor="modal__input-email" className="modal__label">
          Email
          <input
            type="email"
            className="modal__input"
            name="email"
            id="modal__input-login-email"
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
            id="modal__input-login-password"
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
        <button
          type="submit"
          className={`modal__submit " ${
            buttonDisabled ? "modal__submit_disabled" : ""
          }`}
          disabled={buttonDisabled}
        >
          {buttonText}
        </button>
        <button
          type="button"
          className="modal__toggle"
          onClick={onRegisterClick}
        >
          <span className="modal__toggle-text">or</span> Sign up
        </button>
      </form>
    </Modal>
  );
};

export default LoginModal;
