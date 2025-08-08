import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, type SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { useNavigate } from "react-router-dom";
import routes from "../router/routes";

const loginValidationSchema = z.object({
  email: z.email(),
  password: z.string().min(8),
});

export type FormFields = z.infer<typeof loginValidationSchema> & {
  root?: string;
};

export const useLoginForm = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<FormFields>({
    resolver: zodResolver(loginValidationSchema),
  });

  const onSubmit: SubmitHandler<FormFields> = async () => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      navigate(routes.dashboard);
    } catch (error) {
      setError("root", {
        message: "There is some server issues",
      });
    }
  };

  return {
    register,
    errors,
    isSubmitting,
    submit: handleSubmit(onSubmit),
  };
};
