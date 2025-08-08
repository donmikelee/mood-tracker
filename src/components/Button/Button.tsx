interface ButtonProps {
  isSubmitting?: boolean;
  type?: "button" | "submit";
  text: string;
}

const Button = ({ isSubmitting, type, text }: ButtonProps) => {
  return (
    <button
      disabled={isSubmitting}
      type={type}
      className="form-button primary-button text-preset-6"
    >
      {text}
    </button>
  );
};

export default Button;
