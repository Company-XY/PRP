import React from "react";
import { Routes, Route, Link, Outlet } from "react-router-dom";

const Sidenav = () => {
  return (
    <div className="text-black mt-10 flex flex-col">
      <li className="">
        <Link to="/dashboard">Home</Link>
      </li>
      <li>
        <Link to="/dashboard/press">Press Release</Link>
      </li>
      <li>
        <Link to="/dashboard/account">Account</Link>
      </li>
      <li>
        <Link to="/dashboard/settings">Settings</Link>
      </li>
    </div>
  );
};

const Home = () => {
  return <div>Home</div>;
};
const PressRelease = () => {
  return <div>Press Release</div>;
};
const Account = () => {
  return <div>Account</div>;
};
const Settings = () => {
  return <div>Settings</div>;
};

const NewsroomDashboard = () => {
  return (
    <div className="flex w-full h-screen">
      <section className="basis-1/4">
        <Sidenav />
      </section>
      <section className="basis-3/4">
        <Outlet />
      </section>
    </div>
  );
};

const DashboardRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<NewsroomDashboard />}>
        <Route index element={<Home />} />
        <Route path="/press" element={<PressRelease />} />
        <Route path="/account" element={<Account />} />
        <Route path="/settings" element={<Settings />} />
      </Route>
    </Routes>
  );
};

export default DashboardRoutes;
