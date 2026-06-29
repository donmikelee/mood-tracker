import Link from "next/link";
import Navbar from "@/components/Navbar/Navbar";
import SettingsForm from "@/pages/SettingsPage/SettingsForm";

export default function SettingsPage() {
  return (
    <div className="dashboard-page">
      <Navbar />
      <div className="settings-container">
        <div className="form-box">
          <Link href="/dashboard" className="settings-back text-preset-7">
            ← Back to dashboard
          </Link>
          <div className="form-header">
            <h2 className="header-text text-preset-3">Settings</h2>
            <span className="header-desc text-preset-6--regular">
              Update your name and profile picture.
            </span>
          </div>
          <SettingsForm />
        </div>
      </div>
    </div>
  );
}
