import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AdminDashboard from "./AdminDashboard";
import NewsmakerDashboard from "./NewsmakerDashboard";
import NewsroomDashboard from "./NewsroomDashboard";

const MainDashboard = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));
  const userRole = user.role;

  useEffect(() => {
    if (!user) {
      navigate("/");
    }
  }, [user, navigate]);

  switch (userRole) {
    case "Admin":
      return <AdminDashboard />;
    case "Newsmaker":
      return <NewsmakerDashboard />;
    case "Newsroom":
      return <NewsroomDashboard />;
    default:
      return <div>Error: Invalid user role.</div>;
  }
};

export default MainDashboard;
