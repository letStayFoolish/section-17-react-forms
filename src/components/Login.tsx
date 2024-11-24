import React, { FormEvent, useRef, useState } from "react";

const Login: React.FC = () => {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const [isEmailInvalid, setIsEmailInvalid] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const enteredEmail = emailRef.current?.value ?? "";
    const enteredPassword = passwordRef.current?.value ?? "";

    console.log(enteredEmail, enteredPassword);

    // Validation on submission
    const isEmailValid = enteredEmail.includes("@");

    if (!isEmailValid) {
      setIsEmailInvalid(true);
      return; // prevent of the next code to be executed
    }

    setIsEmailInvalid(false);

    console.log("Sending HTTP request with input fields...");
  };

  return (
    <form onSubmit={handleSubmit} noValidate>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input id="email" type="email" name="email" ref={emailRef} />
          {isEmailInvalid && (
            <div className="control-error">
              <p>Please enter valid email address</p>
            </div>
          )}
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            ref={passwordRef}
          />
        </div>
      </div>

      <p className="form-actions">
        <button type="reset" className="button button-flat">
          Reset
        </button>
        <button type="submit" className="button">
          Login
        </button>
      </p>
    </form>
  );
};

export default Login;
