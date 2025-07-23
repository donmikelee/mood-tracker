import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../pages/LoginPage/LoginPage";
import Dashboard from "../pages/DashboardPage/Dashboard";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
