import React from "react";
import AdminDashboard from "./AdminDashboard";
import NewsmakerDashboard from "./NewsmakerDashboard";
import NewsroomDashboard from "./NewsroomDashboard";

const MainDashboard = () => {
  const userRole = localStorage.getItem("userRole");

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
