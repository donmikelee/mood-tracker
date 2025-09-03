import { Routes, Route } from "react-router-dom";
import Login from "../pages/LoginPage/LoginPage";
import Dashboard from "../pages/DashboardPage/Dashboard";
import SignUp from "../pages/SignUpPage/SignUp";
import routes from "./routes";

const AppRouter = () => {
  const { dashboard, signup, login } = routes;
  return (
    <Routes>
      <Route path={dashboard} element={<Dashboard />} />
      <Route path={signup} element={<SignUp />} />
      <Route path={login} element={<Login />} />
    </Routes>
  );
};

export default AppRouter;
