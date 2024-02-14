import React from "react";
import Sidebar from "../../components/sidebar";


const newsmakerDashboard = () => {
  return (
    <div className="flex h-screen bg-gray">
    <Sidebar columns={2} title="Sidebar 1" />
  
    <main className="flex-1 p-4 bg-white">
      <h1 className="text-2xl font-bold mb-4">Dashboard Content</h1>
      {/* Add main content here */}
    </main>
  </div>

  );
};

export default newsmakerDashboard;

