import iconHint from "../../assets/images/icon-hint.svg";
import Image from "next/image";

interface ErrorTextProps {
  text: string;
}

const ErrorText = ({ text }: ErrorTextProps) => {
  return (
    <span className="form-error-text text-preset-9">
      <Image src={iconHint} alt={"Error"} />
      <span>{text}</span>
    </span>
  );
};

export default ErrorText;
