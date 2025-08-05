import iconHint from "../assets/images/icon-hint.svg";

interface ErrorTextProps {
  text: string;
}

const ErrorText = ({ text }: ErrorTextProps) => {
  return (
    <span className="form-error-text text-preset-9">
      <img src={iconHint} alt={"Error"} />
      <span>{text}</span>
    </span>
  );
};

export default ErrorText;
