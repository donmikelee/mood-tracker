import iconHint from "../assets/images/icon-hint.svg";

interface ErrorTextProps {
  children: string;
}

const ErrorText = ({ children }: ErrorTextProps) => {
  return (
    <span className="form-error-text text-preset-9">
      <img src={iconHint} alt={"Error"} />
      <span>{children}</span>
    </span>
  );
};

export default ErrorText;
