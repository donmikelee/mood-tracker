interface ButtonProps {
  isSubmitting?: boolean;
  text?: string;
  onClick?: () => void;
  disabled?: boolean;
  type?: "button" | "submit";
  additionalClass?: string;
}

const Button = ({
  onClick,
  disabled,
  type = "button",
  additionalClass = "",
  text,
}: ButtonProps) => {
  return (
    <button
      disabled={disabled}
      type={type}
      onClick={onClick}
      className={`primary-button ${additionalClass}`.trim()}
    >
      {text}
    </button>
  );
};

export default Button;
