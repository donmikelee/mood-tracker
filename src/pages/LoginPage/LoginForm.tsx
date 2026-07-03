"use client";

import { useLoginForm } from "../../hooks/useLoginForm";
import FormField from "../../components/FormField/FormField";
import Button from "../../components/Button/Button";
import { ErrorMessage } from "@hookform/error-message";
import ErrorText from "../../components/ErrorText/ErrorText";

const LoginForm = () => {
  const { register, errors, isSubmitting, submit } = useLoginForm();

  return (
    <form className="form" onSubmit={submit}>
      <div className="form-email-wrapper">
        <FormField
          id={"email"}
          type={"text"}
          label="Email address"
          reg={register("email")}
          errors={errors}
        />
      </div>
      <div className="form-password-login-wrapper">
        <FormField
          id={"password"}
          type={"password"}
          label="Password"
          reg={register("password")}
          errors={errors}
        />
        <ErrorMessage
          errors={errors}
          name="root"
          render={({ message }) => <ErrorText text={message} />}
        />
      </div>
      <Button
        isSubmitting={isSubmitting}
        type={"submit"}
        text={isSubmitting ? "Loading..." : "Log In"}
      />
    </form>
  );
};

export default LoginForm;
