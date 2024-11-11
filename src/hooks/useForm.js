import { useState } from "react";

const validate = (name, value) => {
  const errors = {};

  if (name === "email") {
    if (!value) {
      errors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(value)) {
      errors.email = "Email is invalid.";
    } else errors.email = "";
  }

  if (name === "password") {
    if (!value) {
      errors.password = "Password is required.";
    } else if (value.length < 8) {
      errors.password = "Password must be at least 8 characters long.";
    } else errors.password = "";
  }

  if (name === "username") {
    if (!value) {
      errors.username = "User name is required.";
    } else if (value.length < 2) {
      errors.username = "User name must be at least 2 characters long.";
    } else errors.username = "";
  }

  return errors;
};

export function useForm(inputValues) {
  const [formValues, setFormValues] = useState(inputValues);
  const [errors, setErrors] = useState({});

  const handleFormChange = (e) => {
    const { value, name } = e.target;
    setFormValues({ ...formValues, [name]: value });

    const fieldErrors = validate(name, value);
    setErrors({ ...errors, ...fieldErrors });
  };

  return { formValues, handleFormChange, errors, setFormValues };
}
