"use client";

import Image from "next/image";
import Link from "next/link";

interface AuthPageProps {
  type: "login" | "signup";
  FormComponent: React.ComponentType;
  mainWrapper?: string;
}

const AuthPage = ({ type, FormComponent, mainWrapper }: AuthPageProps) => {
  const isLogin = type === "login";

  return (
    <div className={mainWrapper ? mainWrapper : "login-page"}>
      <header className="main-header">
        <Link href="/">
          <Image src="/logo.svg" alt="Mood tracker" width={178} height={40} />
        </Link>
      </header>
      <div className="container">
        <div className="form-box">
          <div className="form-header">
            <h2 className="header-text text-preset-3">
              {isLogin ? "Welcome back!" : "Create an account"}
            </h2>
            <span className="header-desc text-preset-6--regular">
              {isLogin
                ? "Log in to continue tracking your mood and sleep"
                : "Join to track your daily mood and sleep with ease."}
            </span>
          </div>
          <FormComponent />
          <div className="form-footer-container">
            <span className="form-footer-text text-preset-6--regular">
              {isLogin ? (
                <>
                  Don&apos;t have an account?{" "}
                  <Link href="/signup" className="form-footer-link">
                    Sign up.
                  </Link>
                </>
              ) : (
                <>
                  Already have an account?{" "}
                  <Link href="/login" className="form-footer-link">
                    Log in.
                  </Link>
                </>
              )}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
