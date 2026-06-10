"use client";

import Link from "next/link";
import Image from "next/image";
import logo from "../../assets/images/logo.svg";
import avatar from "../../assets/images/avatar-lisa.jpg";
import iconArrow from "../../assets/images/icon-dropdown-arrow.svg";
import iconSettings from "../../assets/images/icon-settings.svg";
import iconLogout from "../../assets/images/icon-logout.svg";
import { useState } from "react";
import { createClient } from "@/lib/supabase";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const dropdownHandler = () => {
    setOpen((prevState) => !prevState);
  };

  const handleLogout = async () => {
    const supabase = createClient();
    await supabase.auth.signOut();
    window.location.href = "/login";
  };

  return (
    <nav className="navbar">
      <Link href="/">
        <Image src={logo} alt="Mood tracker" />
      </Link>
      <div className="navigation-options">
        <div className="avatar-image">
          <Image src={avatar} alt="avatar-photo" />
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
              <li className="user-name text-preset-6">Lisa Maria</li>
              <li className="user-email text-preset-7">lisa@mail.com</li>
              <li className="divider"></li>
              <li className="settings clickable">
                <Image src={iconSettings} alt="Settings" />
                <span className="text-preset-7">Settings</span>
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
