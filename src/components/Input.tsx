import React, { InputHTMLAttributes } from "react";

type Props = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  id: string;
  error: string;
};

const Input: React.FC<Props> = ({ label, id, error, ...props }) => {
  return (
    <div className="control no-margin">
      <label htmlFor={id}>{label}</label>
      <input id={id} {...props} />
      {error && (
        <div className="control-error">
          <p>{error}</p>
        </div>
      )}
    </div>
  );
};

export default Input;
