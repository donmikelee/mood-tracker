import LoginForm from "./LoginForm";
import logo from "../../assets/images/logo.svg";
import { Link } from "react-router-dom";
import routes from "../../router/routes";

const LoginPage = () => {
  return (
    <div className="login-page">
      <header className="main-header">
        <a href="#">
          <img src={logo} alt={"Mood tracker"} />
        </a>
      </header>
      <div className="container">
        <div className="form-box">
          <div className="form-header">
            <h2 className="header-text text-preset-3">Welcome back!</h2>
            <span className="header-desc text-preset-6--regular">
              Log in to continue tracking your mood and sleep
            </span>
          </div>
          <LoginForm />
          <div className="form-footer-container">
            <span className="form-footer-text text-preset-6--regular">
              Haven't got an account?{" "}
              <Link to={routes.signup} className="form-footer-link">
                Sign up.
              </Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
