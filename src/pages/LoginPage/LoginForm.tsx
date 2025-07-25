import type { CSSProperties } from "react";
import { ErrorMessage } from "@hookform/error-message";
import { useLoginForm } from "../../hooks/useLoginForm";

const validationStyle: CSSProperties = {
  color: "firebrick",
  fontWeight: "bold",
};

const LoginForm = () => {
  const { register, errors, isSubmitting, submit } = useLoginForm();

  return (
    <form
      className="form"
      style={{
        display: "flex",
        flexDirection: "column",
        rowGap: "10px",
      }}
      onSubmit={submit}
    >
      <label htmlFor="form-email">Email adress</label>
      <input
        {...register("email")}
        id="form-email"
        type="text"
        placeholder="name@mail.com"
      />
      <ErrorMessage
        errors={errors}
        name="email"
        render={({ message }) => <span style={validationStyle}>{message}</span>}
      />
      <label htmlFor="form-password">Password</label>
      <input {...register("password")} id="form-password" type="password" />
      <ErrorMessage
        errors={errors}
        name="password"
        render={({ message }) => <span style={validationStyle}>{message}</span>}
      />
      <button disabled={isSubmitting} type="submit">
        {isSubmitting ? "Loading..." : "Log In"}
      </button>
      <ErrorMessage
        errors={errors}
        name="root"
        render={({ message }) => <span style={validationStyle}>{message}</span>}
      />
    </form>
  );
};

export default LoginForm;
