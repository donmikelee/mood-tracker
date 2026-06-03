"use client";

import Link from "next/link";
import Image from "next/image";
import logo from "../../assets/images/logo.svg";
import iconHappy from "../../assets/images/icon-happy-white.svg";

const features = [
  {
    icon: iconHappy,
    title: "Track daily mood",
    desc: "Log how you feel every day in seconds.",
  },
  {
    icon: iconHappy,
    title: "Monitor your sleep",
    desc: "Keep track of your sleep hours and patterns.",
  },
  {
    icon: iconHappy,
    title: "See your trends",
    desc: "Visualize your mood and sleep data over time.",
  },
];

const LandingPage = () => {
  return (
    <div className="landing-page">
      <nav className="landing-nav">
        <div className="landing-nav__logo">
          <Image src={logo} alt="Mood Tracker" />
        </div>
        <div className="landing-nav__actions">
          <Link href="/login" className="btn-ghost text-preset-6">
            Log in
          </Link>
          <Link href="/signup" className="btn-primary text-preset-6">
            Sign up
          </Link>
        </div>
      </nav>

      <section className="landing-hero">
        <h1 className="text-preset-1">
          Track your mood.
          <br />
          <span className="landing-hero__accent">
            Understand yourself better.
          </span>
        </h1>
        <p className="landing-hero__desc text-preset-6--regular">
          A simple and beautiful way to log your daily mood and sleep, spot
          patterns, and take control of your wellbeing.
        </p>
        <Link href="/signup" className="btn-primary text-preset-5">
          Get started — it's free
        </Link>
        <section className="landing-features">
          {features.map((feature) => (
            <div key={feature.title} className="landing-feature-card">
              <div className="landing-feature-card__icon">
                <Image
                  src={feature.icon}
                  alt={feature.title}
                  width={24}
                  height={24}
                />
              </div>
              <h3 className="text-preset-4">{feature.title}</h3>
              <p className="text-preset-7">{feature.desc}</p>
            </div>
          ))}
        </section>
        <div className="landing-hero__cta">
          <Link href="/login" className="btn-ghost text-preset-6">
            Already have an account? Log in
          </Link>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
