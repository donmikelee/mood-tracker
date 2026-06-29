import OnboardingForm from "@/pages/SignUpPage/OnboardingPage/OnboardingForm";

export default function OnboardingPage() {
  return (
    <div className="login-page">
      <header className="main-header">
        <a href="/">
          <img src="/logo.svg" alt="Mood tracker" />
        </a>
      </header>
      <div className="container">
        <div className="form-box">
          <div className="form-header">
            <h2 className="header-text text-preset-3">
              Personalize Your Experience
            </h2>
            <span className="header-desc text-preset-6--regular">
              Add your name and a profile picture to make Mood yours.
            </span>
          </div>
          <OnboardingForm />
        </div>
      </div>
    </div>
  );
}
