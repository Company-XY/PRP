import React from "react";
import { Routes, Route, Link, Outlet } from "react-router-dom";

const Home = () => {
  return <div>Home</div>;
};
const Account = () => {
  return <div>Account</div>;
};
const Settings = () => {
  return <div>Settings</div>;
};

const newsroomDashboard = () => {
  return (
    <div className="flex w-full h-screen">
      <section className="basis-1/4 bg-gray-800 text-black px-4 py-6">
        {/* Side Nav */}
        <nav>
          <ul className="space-y-4">
            <li>
              <Link to="*">Home</Link>
            </li>
            <li>
              <Link to="account">Account</Link>
            </li>
            <li>
              <Link to="settings">Settings</Link>
            </li>
          </ul>
        </nav>
      </section>
      <section className="basis-3/4 p-4">
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="account" element={<Account />} />
          <Route path="settings" element={<Settings />} />

          <Route path="*" element={<Outlet />} />
        </Routes>
      </section>
    </div>
  );
};

export default newsroomDashboard;
