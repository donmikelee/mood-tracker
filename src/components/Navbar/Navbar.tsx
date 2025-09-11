import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.svg";
import avatar from "../../assets/images/avatar-lisa.jpg";
import iconArrow from "../../assets/images/icon-dropdown-arrow.svg";
import iconSettings from "../../assets/images/icon-settings.svg";
import iconLogout from "../../assets/images/icon-logout.svg";
import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const dropdownHandler = () => {
    setOpen((prevState) => !prevState);
  };

  return (
    <nav className="navbar">
      <Link to="/">
        <img src={logo} alt="Mood tracker" />
      </Link>
      <div className="navigation-options">
        <div className="avatar-image">
          <img src={avatar} alt="avatar-photo" />
        </div>
        <div
          className={`dropdown-options ${open ? "clicked" : ""}`}
          onClick={dropdownHandler}
        >
          <img src={iconArrow} alt="avatar-photo" />
        </div>
        {open && (
          <div className="dropdown-menu">
            <ul>
              <li className="user-name text-preset-6">Lisa Maria</li>
              <li className="user-email text-preset-7">lisa@mail.com</li>
              <li className="divider"></li>
              <li className="settings clickable">
                <img src={iconSettings} alt="Settings" />
                <span className="text-preset-7">Settings</span>
              </li>
              <li className="logout clickable">
                <img src={iconLogout} alt="Logout" />
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
