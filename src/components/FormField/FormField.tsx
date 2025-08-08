import { type UseFormRegisterReturn } from "react-hook-form";
import { type FormFields } from "../../hooks/useLoginForm";
import { ErrorMessage } from "@hookform/error-message";
import ErrorText from "../ErrorText/ErrorText";

interface FormFieldProps {
  id: string;
  type: string;
  label: string;
  reg: UseFormRegisterReturn<keyof FormFields>;
  placeholder?: string;
  errors?: any;
}

const FormField = ({
  id,
  type,
  placeholder,
  label,
  reg,
  errors,
}: FormFieldProps) => {
  return (
    <>
      <label htmlFor={`${id}`} className="form-label text-preset-6">
        {label}
      </label>
      <input
        {...reg}
        id={id}
        type={type}
        placeholder={placeholder}
        className={`form-input text-preset-6 ${
          Object.keys(errors).length ? "input-error" : ""
        }`}
      />
      {errors && (
        <ErrorMessage
          errors={errors}
          name={id}
          render={({ message }) => <ErrorText text={message} />}
        />
      )}
    </>
  );
};

export default FormField;
