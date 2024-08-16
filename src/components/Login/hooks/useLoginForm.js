// hooks/useLoginForm.js
import { useState } from "react";
import makeLoginApiCall from "../makeLoginApiCall";

const useLoginForm = ({ setIsLoggedIn }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    remember: false,
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, type, value, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await makeLoginApiCall(formData, setIsLoggedIn);

    setFormData({ email: "", password: "", remember: false });
    window.location.reload();
  };

  return {
    formData,
    errors,
    handleChange,
    handleSubmit,
  };
};

export default useLoginForm;
