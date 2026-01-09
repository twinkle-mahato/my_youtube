import React from "react";
import Sidebar from "./Sidebar";
import MainContainer from "./MainContainer";
import WatchPage from "./WatchPage";
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
