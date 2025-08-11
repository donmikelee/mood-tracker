import AuthPage from "../../sections/AuthPage/AuthPage";
import LoginForm from "./LoginForm";

export default function LoginPage() {
  return (
    <AuthPage
      type="login"
      FormComponent={LoginForm}
      mainWrapper="custom-login-page"
    />
  );
}
