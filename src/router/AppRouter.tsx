import { Routes, Route } from "react-router-dom";
import Login from "../pages/LoginPage/LoginPage";
import Dashboard from "../pages/DashboardPage/Dashboard";
import SignUp from "../pages/SignUpPage/SignUp";
import routes from "./routes";

const AppRouter = () => {
  const { home, dashboard, signup } = routes;
  return (
    <Routes>
      <Route path={home} element={<Login />} />
      <Route path={dashboard} element={<Dashboard />} />
      <Route path={signup} element={<SignUp />} />
    </Routes>
  );
};

export default AppRouter;
