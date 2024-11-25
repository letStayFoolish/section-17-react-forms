import React, { FormEvent } from "react";
import Input from "./Input.tsx";
import useInput from "../hook/useInput.ts";
import { hasMinLength, isEmail, isNotEmpty } from "../util/validation.ts";

/**
 * If we want to do validation on every keystroke, we need stateful form
 */
const Login: React.FC = () => {
  const {
    value: emailEntered,
    handleInputChange: handleEmailChange,
    handleInputBlur: handleEmailBlur,
    hasError: isEmailInvalid,
  } = useInput("", (value: string) => isNotEmpty(value) && isEmail(value));

  const {
    value: passwordEntered,
    handleInputChange: handlePasswordChange,
    handleInputBlur: handlePasswordBlur,
    hasError: isPasswordInvalid,
  } = useInput("", (value: string) => hasMinLength(value, 6));

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // It is always good to have some validation on submission
    if (isEmailInvalid || isPasswordInvalid) return;

    console.log("Sending HTTP request...");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <Input
          label="Email"
          id="email"
          name="email"
          type="email"
          value={emailEntered}
          onBlur={handleEmailBlur}
          onChange={handleEmailChange}
          error={isEmailInvalid ? "Please enter an valid email address." : ""}
        />

        <Input
          label="Password"
          id="password"
          name="password"
          type="password"
          error={
            isPasswordInvalid
              ? "Please enter a password of at least 6 characters"
              : ""
          }
          value={passwordEntered}
          onBlur={handlePasswordBlur}
          onChange={handlePasswordChange}
        />
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button type="submit" className="button">
          Login
        </button>
      </p>
    </form>
  );
};

export default Login;
