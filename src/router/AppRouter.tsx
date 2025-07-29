import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../pages/LoginPage/LoginPage";
import Dashboard from "../pages/DashboardPage/Dashboard";
import SignUp from "../pages/SignUpPage/SignUp";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/sign-up" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
