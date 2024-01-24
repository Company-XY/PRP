import { Routes, Route } from "react-router-dom";
import Home from "../Home";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Dashboard from "../Dashboard/mainDashboard";
import Login from "../Auth/Login";
import Signup from "../Auth/Signup";

function Routers() {
  return (
    <>
      <Header />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
      <Footer />
    </>
  );
}

export default Routers;
