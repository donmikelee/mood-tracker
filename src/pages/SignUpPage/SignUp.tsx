import AuthPage from "../../sections/AuthPage/AuthPage";
import SignUpForm from "./SignUpForm";

export default function SignUp() {
  return (
    <AuthPage
      type="signup"
      FormComponent={SignUpForm}
      mainWrapper="custom-signup-page"
    />
  );
}
