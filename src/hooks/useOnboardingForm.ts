"use client";

import { useState } from "react";
import { createClient } from "@/lib/supabase";

export const useOnboardingForm = (onSaved: () => void) => {
  const [name, setName] = useState("");
  const [avatarFile, setAvatarFile] = useState<File | null>(null);
  const [avatarPreview, setAvatarPreview] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [nameError, setNameError] = useState(false);

  const handleNameChange = (value: string) => {
    setName(value);
    if (nameError) {
      setNameError(false);
      setError(null);
    }
  };

  const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (file.size > 2 * 1024 * 1024) {
      setError("Image must be smaller than 2MB.");
      return;
    }

    setError(null);
    setAvatarFile(file);
    setAvatarPreview(URL.createObjectURL(file));
  };

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!name.trim()) {
      setNameError(true);
      setError("Please enter your name.");
      return;
    }

    setIsSubmitting(true);
    setError(null);

    try {
      const supabase = createClient();
      let avatarUrl: string | undefined;

      if (avatarFile) {
        const { data: { user } } = await supabase.auth.getUser();
        const fileExt = avatarFile.name.split(".").pop();
        const filePath = `${user!.id}.${fileExt}`;

        const { error: uploadError } = await supabase.storage
          .from("avatars")
          .upload(filePath, avatarFile, { upsert: true });

        if (uploadError) {
          console.error("Supabase upload error:", uploadError);
          setError(uploadError.message);
          setIsSubmitting(false);
          return;
        }

        const { data } = supabase.storage.from("avatars").getPublicUrl(filePath);
        avatarUrl = data.publicUrl;
      }

      const { error: updateError } = await supabase.auth.updateUser({
        data: {
          full_name: name.trim(),
          ...(avatarUrl && { avatar_url: avatarUrl }),
        },
      });

      if (updateError) {
        setError(updateError.message);
        setIsSubmitting(false);
        return;
      }

      onSaved();
    } catch {
      setError("Something went wrong. Please try again.");
      setIsSubmitting(false);
    }
  };

  return {
    name,
    setName: handleNameChange,
    nameError,
    avatarPreview,
    handleAvatarChange,
    isSubmitting,
    error,
    submit,
  };
};
