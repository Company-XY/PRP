import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import Dashboard from "../pages/Dashboard/mainDashboard";
import Login from "../pages/Auth/Login";
import Signup from "../pages/Auth/Signup";
import Contact from "../pages/Contact";

function Routers() {
  return (
    <>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default Routers;
