import { type FieldErrors, type FieldValues, type UseFormRegisterReturn } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import ErrorText from "../ErrorText/ErrorText";

interface FormFieldProps {
  id: string;
  type: string;
  label: string;
  reg: UseFormRegisterReturn<string>;
  placeholder?: string;
  errors?: FieldErrors<FieldValues>;
  hideInlineError?: boolean;
}

const FormField = ({
  id,
  type,
  placeholder,
  label,
  reg,
  errors,
  hideInlineError,
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
          errors?.[id] || errors?.root ? "input-error" : ""
        }`}
      />
      {errors && !hideInlineError && (
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
