import LoginForm from "./LoginForm";
import logo from "../../assets/images/logo.svg";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate("/sign-up");
  };
  return (
    <div className="login-page">
      <header className="main-header">
        <a href="#">
          <img src={logo} alt={logo} />
        </a>
      </header>
      <div className="container">
        <div className="form-box">
          <div className="form-header">
            <h2 className="header-text text-preset-3">Welcome back!</h2>
            <small className="header-desc text-preset-6--regular">
              Log in to continue tracking your mood and sleep
            </small>
          </div>
          <LoginForm />
          <div className="form-footer-container">
            <span className="form-footer-text text-preset-6--regular">
              Haven't got an account?{" "}
              <a
                href=""
                onClick={handleNavigation}
                className="form-footer-link"
              >
                Sign up.
              </a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
