"use client";

import Image from "next/image";
import { useSettingsForm } from "@/hooks/useSettingsForm";
import avatarPlaceholder from "@/assets/images/avatar-placeholder.svg";
import iconUpload from "@/assets/images/icon-upload.svg";
import Button from "@/components/Button/Button";
import ErrorText from "@/components/ErrorText/ErrorText";

const SettingsForm = () => {
  const {
    name,
    setName,
    nameError,
    avatarPreview,
    handleAvatarChange,
    isSubmitting,
    error,
    success,
    submit,
  } = useSettingsForm();

  return (
    <form className="form" onSubmit={submit}>
      <div className="form-email-wrapper">
        <label htmlFor="name" className="form-label text-preset-6">
          Name
        </label>
        <input
          id="name"
          type="text"
          className={`form-input ${nameError ? "input-error" : ""}`.trim()}
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        {error && <ErrorText text={error} />}
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
          <span className="text-preset-6">Profile picture</span>
          <span className="onboarding-avatar-hint text-preset-7">
            Max 2MB, PNG or JPEG
          </span>
          <label
            htmlFor="avatar"
            className="onboarding-upload-btn text-preset-7"
          >
            <Image src={iconUpload} alt="" width={16} height={16} />
            Change photo
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
      {success && (
        <span className="settings-success text-preset-7">
          Changes saved successfully!
        </span>
      )}
      <Button
        type="submit"
        isSubmitting={isSubmitting}
        text={isSubmitting ? "Saving..." : "Save changes"}
      />
    </form>
  );
};

export default SettingsForm;
