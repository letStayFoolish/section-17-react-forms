import React, { ChangeEvent, FormEvent, useState } from "react";
import Input from "./Input.tsx";

type TFormValues = {
  email: string;
  password: string;
};

/**
 * If we want to do validation on every keystroke, we need stateful form
 * @constructor
 */
const Login: React.FC = () => {
  const [enteredValues, setEnteredValues] = useState<TFormValues>({
    email: "",
    password: "",
  });

  const [isFocus, setIsFocus] = useState({
    email: false,
    password: false,
  });

  // Validation
  const isEmailInvalid = isFocus.email && !enteredValues.email.includes("@");
  const isPasswordInvalid =
    isFocus.password && enteredValues.password.trim().length < 6;

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // It is always good to have some validation on submission
    if (isEmailInvalid && isPasswordInvalid) return;

    console.log("Sending HTTP request...");

    console.log(
      "User Email: " + enteredValues.email,
      "Password: " + enteredValues.password,
    );
  };

  const handleInputBlur = (identifier: string) => {
    setIsFocus((prevValue) => ({
      ...prevValue,
      [identifier]: true,
    }));
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setEnteredValues((prevValues) => {
      return {
        ...prevValues,
        [event.target.name]: event.target.value,
      };
    });

    setIsFocus((prevState) => ({
      ...prevState,
      [event.target.name]: false,
    }));
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
          value={enteredValues.email}
          onBlur={() => handleInputBlur("email")}
          onChange={handleInputChange}
          error={isEmailInvalid && "Please enter an valid email address."}
        />

        <Input
          label="Password"
          id="password"
          name="password"
          type="password"
          error={
            isPasswordInvalid &&
            "Please enter a password of at least 6 characters"
          }
          value={enteredValues.password}
          onBlur={() => handleInputBlur("password")}
          onChange={handleInputChange}
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
