"use client";

import { useState, useEffect } from "react";

export default function RegisterForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState<{
    email?: string;
    password?: string;
    password2?: string;
  }>({});
  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    validateForm();
  }, [password, email]);

  // Validate form
  const validateForm = () => {
    let errors: { email?: string; password?: string; password2?: string } = {};

    if (!email) {
      console.log("Email is required.");
      errors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      console.log("Email is invalid.");
      errors.email = "Email is invalid.";
    }

    if (!password) {
      console.log("Password is required.");
      errors.password = "Password is required.";
    } else if (password.length < 6) {
      console.log("Password must be at least 6 characters.");
      errors.password = "Password must be at least 6 characters.";
    }

    setErrors(errors);
    console.log(errors);
    console.log(Object.keys(errors));
    setIsFormValid(Object.keys(errors).length === 0);
  };

  // Submit
  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    if (isFormValid) {
      console.log("Form submitted successfully!");
    } else {
      console.log("Form has errors. Please correct them.");
    }
  };

  return (
    <div>
      <input
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      {errors.email && <p>{errors.email}</p>}

      <br />
      <input
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        type="password"
      />
      {errors.password && <p>{errors.password}</p>}

      <br />

      <button disabled={!isFormValid} onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
}
