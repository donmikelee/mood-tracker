import type { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  type?: "button" | "submit";
  additionalClass?: string;
}

const Button = ({ children, onClick, disabled, type = "button", additionalClass = "" }: ButtonProps) => {
  return (
    <button
      disabled={disabled}
      type={type}
      onClick={onClick}
      className={`primary-button ${additionalClass}`.trim()}
    >
      {children}
    </button>
  );
};

export default Button;
