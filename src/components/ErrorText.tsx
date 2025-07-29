import React from "react";
import iconHint from "../assets/images/icon-hint.svg";

interface ErrorTextProps {
  children: string;
}

const ErrorText: React.FC<ErrorTextProps> = ({ children }) => {
  return (
    <span className="form-error-text text-preset-9">
      <img src={iconHint} alt={iconHint} />
      <span>{children}</span>
    </span>
  );
};

export default ErrorText;
