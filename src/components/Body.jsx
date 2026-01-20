import React from "react";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router";
import Head from "./Head";

const Body = () => {
  return (
    <div>
      <Head />
      <div className="flex">
        <Sidebar />
        {/* The content below changes based on the URL */}
        <Outlet />
      </div>
    </div>
  );
};

export default Body;
