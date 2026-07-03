"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { usePwaInstallStore } from "@/store/usePwaInstallStore";
import Button from "@/components/Button/Button";

const isIos = () =>
  typeof navigator !== "undefined" && /iphone|ipad|ipod/i.test(navigator.userAgent);

const InstallAppStep = () => {
  const router = useRouter();
  const isInstallable = usePwaInstallStore((state) => state.isInstallable);
  const isInstalled = usePwaInstallStore((state) => state.isInstalled);
  const promptInstall = usePwaInstallStore((state) => state.promptInstall);
  const [isPrompting, setIsPrompting] = useState(false);

  const goToDashboard = () => router.push("/dashboard");

  const handleInstall = async () => {
    setIsPrompting(true);
    const outcome = await promptInstall();
    setIsPrompting(false);
    if (outcome === "accepted") goToDashboard();
  };

  return (
    <div className="form-box confirm-box">
      <Image
        src="/icons/icon-192.png"
        alt="Mood tracker"
        width={56}
        height={56}
        className="confirm-icon"
      />
      <div className="form-header confirm-header">
        <h2 className="header-text text-preset-3">Add Mood to your home screen</h2>
        <span className="header-desc text-preset-6--regular">
          {isInstalled
            ? "Mood is already installed on this device. You're all set!"
            : isInstallable
              ? "Install Mood as an app for quick access and a full-screen experience."
              : isIos()
                ? "Tap the Share icon in Safari, then “Add to Home Screen” to install Mood."
                : "You can install Mood from your browser's menu at any time."}
        </span>
      </div>
      {isInstallable && !isInstalled && (
        <Button
          type="button"
          onClick={handleInstall}
          isSubmitting={isPrompting}
          text={isPrompting ? "Installing..." : "Install app"}
          additionalClass="confirm-button"
        />
      )}
      <button
        type="button"
        onClick={goToDashboard}
        className={
          isInstallable && !isInstalled
            ? "form-footer-text onboarding-skip-link"
            : "primary-button confirm-button"
        }
      >
        {isInstalled ? "Continue" : isInstallable ? "Skip for now" : "Continue"}
      </button>
    </div>
  );
};

export default InstallAppStep;
