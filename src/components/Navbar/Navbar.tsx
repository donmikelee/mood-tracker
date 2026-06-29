"use client";

import Link from "next/link";
import Image from "next/image";
import logo from "../../assets/images/logo.svg";
import avatarPlaceholder from "../../assets/images/avatar-placeholder.svg";
import iconArrow from "../../assets/images/icon-dropdown-arrow.svg";
import iconSettings from "../../assets/images/icon-settings.svg";
import iconLogout from "../../assets/images/icon-logout.svg";
import { useEffect, useState } from "react";
import { createClient } from "@/lib/supabase";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [avatarUrl, setAvatarUrl] = useState<string | null>(null);

  useEffect(() => {
    const supabase = createClient();
    supabase.auth.getUser().then(({ data: { user } }) => {
      if (!user) return;
      setUserName(user.user_metadata?.full_name ?? "");
      setUserEmail(user.email ?? "");
      setAvatarUrl(user.user_metadata?.avatar_url ?? null);
    });
  }, []);

  const dropdownHandler = () => setOpen((prev) => !prev);

  const handleLogout = async () => {
    const supabase = createClient();
    await supabase.auth.signOut();
    window.location.href = "/login";
  };

  return (
    <nav className="navbar">
      <Link href="/dashboard" className="logo">
        <Image src={logo} alt="Mood tracker" />
      </Link>
      <div className="navigation-options">
        <div className="avatar-image" onClick={dropdownHandler}>
          <Image
            src={avatarUrl ?? avatarPlaceholder}
            alt="avatar-photo"
            width={40}
            height={40}
            unoptimized={!!avatarUrl}
          />
        </div>
        <div
          className={`dropdown-options ${open ? "clicked" : ""}`}
          onClick={dropdownHandler}
        >
          <Image src={iconArrow} alt="avatar-photo" />
        </div>
        {open && (
          <div className="dropdown-menu">
            <ul>
              <li className="user-name text-preset-6">{userName}</li>
              <li className="user-email text-preset-7">{userEmail}</li>
              <li className="divider"></li>
              <li className="settings clickable">
                <Link href="/settings" onClick={() => setOpen(false)}>
                  <Image src={iconSettings} alt="Settings" />
                  <span className="text-preset-7">Settings</span>
                </Link>
              </li>
              <li onClick={handleLogout} className="logout clickable">
                <Image src={iconLogout} alt="Logout" />
                <span className="text-preset-7">Logout</span>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
