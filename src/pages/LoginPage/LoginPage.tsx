import LoginForm from "./LoginForm";

const LoginPage = () => {
  return (
    <>
      <nav
        style={{
          width: "100%",
          textAlign: "center",
          padding: "20px 0",
          fontSize: "34px",
        }}
      >
        <a href="#">😀 Mood tracker</a>
      </nav>
      <div
        className="login-form-container"
        style={{
          margin: "auto",
          display: "flex",
          flexDirection: "column",
          rowGap: "10px",
        }}
      >
        <div className="login-form-header">
          <h2 className="form-header text-preset-3">Welcome back!</h2>
          <small className="form-header-description text-preset-6--regular">
            Log in to continue tracking your mood and sleep
          </small>
        </div>
        <LoginForm />
        <div className="login-form-footer">
          <span className="form-footer">
            Haven't got an account? <a href="">Sign up.</a>
          </span>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
