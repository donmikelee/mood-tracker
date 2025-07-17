import { zodResolver } from "@hookform/resolvers/zod";
import type { CSSProperties } from "react";
import { type SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";

const schema = z.object({
  email: z.email(),
  password: z.string().min(8),
});

type FormFields = z.infer<typeof schema>;

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<FormFields>({
    resolver: zodResolver(schema),
  });

  const onSubmit: SubmitHandler<FormFields> = async (data) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      console.log(data);
    } catch (error) {
      setError("root", {
        message: "This email is already taken",
      });
    }
  };

  const validationStyle: CSSProperties = {
    color: "firebrick",
    fontWeight: "bold",
  };

  return (
    <form
      className="login-form"
      style={{
        display: "flex",
        flexDirection: "column",
        rowGap: "10px",
      }}
      onSubmit={handleSubmit(onSubmit)}
    >
      <label htmlFor="form-email">Email adress</label>
      <input
        {...register("email")}
        id="form-email"
        type="text"
        placeholder="name@mail.com"
      />
      {errors.email && (
        <span style={validationStyle}>{errors.email.message}</span>
      )}
      <label htmlFor="form-password">Password</label>
      <input {...register("password")} id="form-password" type="password" />
      {errors.password && (
        <span style={validationStyle}>{errors.password.message}</span>
      )}
      <button disabled={isSubmitting} type="submit">
        {isSubmitting ? "Loading..." : "Log In"}
      </button>
      {errors.root && (
        <span style={validationStyle}>{errors.root.message}</span>
      )}
    </form>
  );
};

export default LoginForm;
