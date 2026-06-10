"use client"

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, type SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase"

const loginValidationSchema = z.object({
  email: z.email(),
  password: z.string(),
});

export type FormFields = z.infer<typeof loginValidationSchema> & {
  root?: string;
};

export const useLoginForm = () => {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<FormFields>({
    resolver: zodResolver(loginValidationSchema),
  });

  const onSubmit: SubmitHandler<FormFields> = async (data) => {
    try {
      const supabase = createClient()
      const { error } = await supabase.auth.signInWithPassword({
        email: data.email,
        password: data.password,
      })

      if (error) {
        setError("root", { message: "Invalid email or password" })
        return
      }

      router.push("/dashboard")
    } catch {
      setError("root", { message: "Something went wrong. Please try again." })
    }
  }

  return {
    register,
    errors,
    isSubmitting,
    submit: handleSubmit(onSubmit),
  };
};
