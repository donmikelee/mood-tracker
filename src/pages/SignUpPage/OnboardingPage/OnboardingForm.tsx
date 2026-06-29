"use client";

import Image from "next/image";
import { useOnboardingForm } from "@/hooks/useOnboardingForm";
import avatarPlaceholder from "@/assets/images/avatar-placeholder.svg";
import Button from "@/components/Button/Button";
import ErrorText from "@/components/ErrorText/ErrorText";

const OnboardingForm = () => {
  const {
    name,
    setName,
    avatarPreview,
    handleAvatarChange,
    isSubmitting,
    error,
    submit,
  } = useOnboardingForm();

  return (
    <form className="form" onSubmit={submit}>
      <div className="form-email-wrapper">
        <label htmlFor="name" className="form-label text-preset-6">
          Name
        </label>
        <input
          id="name"
          type="text"
          className="form-input"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="onboarding-avatar-wrapper">
        <div className="onboarding-avatar-preview">
          <Image
            src={avatarPreview ?? avatarPlaceholder}
            alt="Avatar preview"
            width={56}
            height={56}
            className="onboarding-avatar-image"
            unoptimized={!!avatarPreview}
          />
        </div>
        <div className="onboarding-avatar-info">
          <span className="text-preset-6">Upload Image</span>
          <span className="onboarding-avatar-hint text-preset-7">
            Min 400x400px, PNG or JPEG
          </span>
          <label htmlFor="avatar" className="onboarding-upload-btn text-preset-7">
            Upload
            <input
              id="avatar"
              type="file"
              accept="image/png, image/jpeg"
              className="onboarding-file-input"
              onChange={handleAvatarChange}
            />
          </label>
        </div>
      </div>
      {error && <ErrorText text={error} />}
      <Button
        type="submit"
        isSubmitting={isSubmitting}
        text={isSubmitting ? "Saving..." : "Start Tracking"}
      />
    </form>
  );
};

export default OnboardingForm;
