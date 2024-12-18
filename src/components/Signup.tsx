import React, { FormEvent, useState } from "react";

const Signup: React.FC = () => {
  const [passwordsAreNotEqual, setPasswordsAreNotEqual] = useState(false);
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    const fd = new FormData(event.target as HTMLFormElement);

    // Method to get multiple values from one input field
    const acquisitionChannel = fd.getAll("acquisition");

    const data = Object.fromEntries(fd.entries()); // fd.entries() will give us kind an array of all input fields and their values, and calling Object.fromEntries, static method, on array will give us object, where we have key-value pairs for all our input fields
    data.acquisition = acquisitionChannel;

    if (data.passwird !== data["confirm-password"]) {
      setPasswordsAreNotEqual(true);
      return;
    }

    setPasswordsAreNotEqual(false);

    console.log({ data });

    // Reset Form programmatically
    // event.target.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Welcome on board!</h2>
      <p>We just need a little bit of data from you to get you started 🚀</p>

      <div className="control">
        <label htmlFor="email">Email</label>
        <input id="email" type="email" name="email" />
      </div>

      <div className="control-row">
        <div className="control">
          <label htmlFor="password">Password</label>
          <input id="password" type="password" name="password" />
          {passwordsAreNotEqual && (
            <div className="control-error">
              <p>Passwords should be matching</p>
            </div>
          )}
        </div>

        <div className="control">
          <label htmlFor="confirm-password">Confirm Password</label>
          <input
            id="confirm-password"
            type="password"
            name="confirm-password"
          />
          {passwordsAreNotEqual && (
            <div className="control-error">
              <p>Passwords should be matching</p>
            </div>
          )}
        </div>
      </div>

      <hr />

      <div className="control-row">
        <div className="control">
          <label htmlFor="first-name">First Name</label>
          <input type="text" id="first-name" name="first-name" />
        </div>

        <div className="control">
          <label htmlFor="last-name">Last Name</label>
          <input type="text" id="last-name" name="last-name" />
        </div>
      </div>

      <div className="control">
        <label htmlFor="phone">What best describes your role?</label>
        <select id="role" name="role">
          <option value="student">Student</option>
          <option value="teacher">Teacher</option>
          <option value="employee">Employee</option>
          <option value="founder">Founder</option>
          <option value="other">Other</option>
        </select>
      </div>

      <fieldset>
        <legend>How did you find us?</legend>
        <div className="control">
          <input
            type="checkbox"
            id="google"
            name="acquisition"
            value="google"
          />
          <label htmlFor="google">Google</label>
        </div>

        <div className="control">
          <input
            type="checkbox"
            id="friend"
            name="acquisition"
            value="friend"
          />
          <label htmlFor="friend">Referred by friend</label>
        </div>

        <div className="control">
          <input type="checkbox" id="other" name="acquisition" value="other" />
          <label htmlFor="other">Other</label>
        </div>
      </fieldset>

      <div className="control">
        <label htmlFor="terms-and-conditions">
          <input type="checkbox" id="terms-and-conditions" name="terms" />I
          agree to the terms and conditions
        </label>
      </div>

      <p className="form-actions">
        <button type="reset" className="button button-flat">
          Reset
        </button>
        <button type="submit" className="button">
          Sign up
        </button>
      </p>
    </form>
  );
};

export default Signup;
