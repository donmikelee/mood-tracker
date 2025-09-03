import { useLoginForm } from "../../hooks/useLoginForm";
import FormField from "../../components/FormField/FormField";
import Button from "../../components/Button/Button";

const LoginForm = () => {
  const { register, errors, isSubmitting, submit } = useLoginForm();

  return (
    <form className="form" onSubmit={submit}>
      <div className="form-email-wrapper">
        <FormField
          id={"email"}
          type={"text"}
          placeholder="name@mail.com"
          label="Email adress"
          reg={register("email")}
          errors={errors}
        />
      </div>
      <div className="form-password-wrapper">
        <FormField
          id={"password"}
          type={"password"}
          label="Password"
          reg={register("password")}
          errors={errors}
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
