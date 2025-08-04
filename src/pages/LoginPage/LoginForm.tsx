import { ErrorMessage } from "@hookform/error-message";
import { useLoginForm } from "../../hooks/useLoginForm";
import ErrorText from "../../components/ErrorText";

const LoginForm = () => {
  const { register, errors, isSubmitting, submit } = useLoginForm();

  return (
    <form className="form" onSubmit={submit}>
      <div className="form-email-wrapper">
        <label htmlFor="form-email" className="form-label text-preset-6">
          Email adress
        </label>
        <input
          {...register("email")}
          id="email"
          type="text"
          placeholder="name@mail.com"
          className={`form-input text-preset-6 ${
            errors.email ? "input-error" : ""
          }`}
        />
        <ErrorMessage
          errors={errors}
          name="email"
          render={({ message }) => <ErrorText>{message}</ErrorText>}
        />
      </div>
      <div className="form-password-wrapper">
        <label htmlFor="form-password" className="form-label text-preset-6">
          Password
        </label>
        <input
          {...register("password")}
          id="password"
          type="password"
          className={`${
            errors.password ? "input-error " : ""
          }form-input text-preset-6`}
        />
        <ErrorMessage
          errors={errors}
          name="password"
          render={({ message }) => <ErrorText>{message}</ErrorText>}
        />
      </div>
      <button
        disabled={isSubmitting}
        type="submit"
        className="form-button primary-button text-preset-6"
      >
        {isSubmitting ? "Loading..." : "Log In"}
      </button>
      <ErrorMessage
        errors={errors}
        name="root"
        render={({ message }) => <ErrorText>{message}</ErrorText>}
      />
    </form>
  );
};

export default LoginForm;
