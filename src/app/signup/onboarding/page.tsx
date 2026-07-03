import Image from "next/image";
import Link from "next/link";
import OnboardingFlow from "@/pages/SignUpPage/OnboardingPage/OnboardingFlow";

export default function OnboardingPage() {
  return (
    <div className="login-page">
      <header className="main-header">
        <Link href="/">
          <Image src="/logo.svg" alt="Mood tracker" width={178} height={40} />
        </Link>
      </header>
      <div className="container">
        <OnboardingFlow />
      </div>
    </div>
  );
}
