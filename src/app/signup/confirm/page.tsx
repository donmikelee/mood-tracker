import Image from "next/image";
import Link from "next/link";
import veryHappy from "@/assets/images/Very Happy.svg";

export default function SignUpConfirmPage() {
  return (
    <div className="login-page">
      <header className="main-header">
        <a href="/">
          <img src="/logo.svg" alt="Mood tracker" />
        </a>
      </header>
      <div className="container">
        <div className="form-box confirm-box">
          <Image src={veryHappy} alt="Very happy" className="confirm-icon" />
          <div className="form-header confirm-header">
            <h2 className="header-text text-preset-3">Account created!</h2>
            <span className="header-desc text-preset-6--regular">
              Your account has been successfully created. Start tracking your
              mood and sleep right away!
            </span>
          </div>
          <Link href="/signup/onboarding" className="primary-button confirm-button">
            Get started
          </Link>
        </div>
      </div>
    </div>
  );
}
