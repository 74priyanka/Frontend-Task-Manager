// hooks/useSignupForm.js
import { useEffect, useState } from "react";
import makeSignupApiCall from "../makeSignupApiCall";

const useSignupForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    username: "",
    password: "",
    confirmPassword: "",
    email: "",
    contact: "",
  });

  const [errors, setErrors] = useState({});
  const [isPasswordMatch, setIsPasswordMatch] = useState(true);

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  useEffect(() => {
    validatePassword(formData.password, formData.confirmPassword);
  }, [formData.confirmPassword, formData.password]);

  const validatePassword = (password, confirmPassword) => {
    console.log(password, confirmPassword);
    if (password !== confirmPassword) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        confirmPassword: "Passwords do not match",
      }));
      setIsPasswordMatch(false);
    } else {
      setErrors((prevErrors) => ({
        ...prevErrors,
        confirmPassword: "",
      }));
      setIsPasswordMatch(true);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    makeSignupApiCall(formData);

    setFormData({
      name: "",
      username: "",
      password: "",
      confirmPassword: "",
      email: "",
      contact: "",
    });
  };

  return {
    formData,
    errors,
    isPasswordMatch,
    handleChange,
    handleSubmit,
  };
};

export default useSignupForm;
