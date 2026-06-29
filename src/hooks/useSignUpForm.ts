"use client"

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, type SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase";

const signUpValidationSchema = z
  .object({
    email: z.email(),
    password: z.string().min(8, "Password must be at least 8 characters"),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

export type SignUpFormFields = z.infer<typeof signUpValidationSchema> & {
  root?: string;
};

export const useSignUpForm = () => {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<SignUpFormFields>({
    resolver: zodResolver(signUpValidationSchema),
  });

  const onSubmit: SubmitHandler<SignUpFormFields> = async (data) => {
    try {
      const supabase = createClient();
      const { error } = await supabase.auth.signUp({
        email: data.email,
        password: data.password,
      });

      if (error) {
        setError("root", { message: error.message });
        return;
      }

      router.push("/signup/confirm");
    } catch {
      setError("root", { message: "Something went wrong. Please try again." });
    }
  };

  return {
    register,
    errors,
    isSubmitting,
    submit: handleSubmit(onSubmit),
  };
};
