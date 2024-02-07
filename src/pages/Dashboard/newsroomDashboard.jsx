import { Link, Outlet } from "react-router-dom";

const newsroomDashboard = () => {
  return (
    <div className="flex w-full h-screen">
      <section className="basis-1/4 flex space-x-3">
        <Link to="settings">Settings</Link>
        <Link to="account">Account</Link>
      </section>
      <section className="basis-3/4">
        <Outlet />
      </section>
    </div>
  );
};

export default newsroomDashboard;
