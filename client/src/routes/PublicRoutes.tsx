import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/home/HomePage";
import LoginPage from "../pages/auth/LoginPage";
import RegisterPage from "../pages/auth/RegisterPage";
import ForgotPasswordPage from "../pages/auth/ForgotPasswordPage";
import RoutePaths from "./RoutePaths";

export default function PublicRoutes() {
  return (
    <Routes>
      <Route path={RoutePaths.HOME} element={<HomePage />} />
      <Route path={RoutePaths.LOGIN} element={<LoginPage />} />
      <Route path={RoutePaths.REGISTER} element={<RegisterPage />} />
      <Route
        path={RoutePaths.FORGOT_PASSWORD}
        element={<ForgotPasswordPage />}
      />
    </Routes>
  );
}