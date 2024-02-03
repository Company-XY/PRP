import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import Dashboard from "../pages/Dashboard/mainDashboard";
import Login from "../pages/Auth/Login";
import Signup from "../pages/Auth/Signup";
import ForgotPassword from "../pages/Auth/forgotPassword";
import ScrollToTopOnPageChange from "../components/ScrollToTopOnPageChange";
import BackToTop from "../components/BackToTop";

function Routers() {
  return (
    <>
      <ScrollToTopOnPageChange />
      <BackToTop />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgot_password" element={<ForgotPassword />} />
      </Routes>
    </>
  );
}

export default Routers;
