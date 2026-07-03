"use client";

import { useSignUpForm } from "../../hooks/useSignUpForm";
import FormField from "../../components/FormField/FormField";
import Button from "../../components/Button/Button";
import ErrorText from "../../components/ErrorText/ErrorText";
import Image from "next/image";
import iconHint from "../../assets/images/icon-hint.svg";

const SignUpForm = () => {
  const { register, errors, isSubmitting, submit } = useSignUpForm();

  return (
    <form className="form" onSubmit={submit}>
      <div className="form-email-wrapper">
        <FormField
          id="email"
          type="text"
          label="Email address"
          reg={register("email")}
          errors={errors}
        />
      </div>
      <div className="form-password-wrapper">
        <FormField
          id="password"
          type="password"
          label="Password"
          reg={register("password")}
          errors={errors}
        />
        <div className="hint-wrapper">
          <Image src={iconHint} alt={"Hint"} className="form-hint-icon" />
          <span className="text-preset-9">
            Password must consider at least 8 characters
          </span>
        </div>
      </div>
      <div className="form-confirm-password-wrapper">
        <FormField
          id="confirmPassword"
          type="password"
          label="Confirm password"
          reg={register("confirmPassword")}
          errors={errors}
        />
      </div>
      {errors.root && <ErrorText text={errors.root.message ?? ""} />}
      <Button
        isSubmitting={isSubmitting}
        type="submit"
        text={isSubmitting ? "Creating account..." : "Create account"}
      />
    </form>
  );
};

export default SignUpForm;
