"use client";

import { useState } from "react";
import OnboardingForm from "@/pages/SignUpPage/OnboardingPage/OnboardingForm";
import InstallAppStep from "@/pages/SignUpPage/OnboardingPage/InstallAppStep";

const OnboardingFlow = () => {
  const [step, setStep] = useState<"profile" | "install">("profile");

  if (step === "install") {
    return <InstallAppStep />;
  }

  return (
    <div className="form-box">
      <div className="form-header">
        <h2 className="header-text text-preset-3">Personalize Your Experience</h2>
        <span className="header-desc text-preset-6--regular">
          Add your name and a profile picture to make Mood yours.
        </span>
      </div>
      <OnboardingForm onSaved={() => setStep("install")} />
    </div>
  );
};

export default OnboardingFlow;
