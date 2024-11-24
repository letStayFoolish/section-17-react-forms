import React, { ChangeEvent, FormEvent, useState } from "react";

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

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

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
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            onBlur={() => handleInputBlur("email")}
            onChange={handleInputChange}
            value={enteredValues.email}
          />
          {isEmailInvalid && (
            <div className="control-error">
              <p>Please enter valid email</p>
            </div>
          )}
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            onBlur={() => handleInputBlur("password")}
            onChange={handleInputChange}
            value={enteredValues.password}
          />
        </div>
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
