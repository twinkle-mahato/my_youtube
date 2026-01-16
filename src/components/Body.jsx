import React from "react";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router";

const Body = () => {
  return (
    <div className="flex">
      <Sidebar />
    {/* The content below changes based on the URL */}
      <Outlet />
    </div>
  );
};

export default Body;
