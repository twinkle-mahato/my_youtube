import React from "react";
import { HAMBURGER_MENU, USER_ICON, YOUTUBE_LOGO } from "../utils/constants";
import { toggleMenu } from "../utils/appSlice";
import { useDispatch } from "react-redux";

const Head = () => {
  const dispatch = useDispatch();

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="w-full grid grid-flow-col items-center px-6 py-3 bg-white shadow-sm sticky top-0 z-50">
      {/* Left Section */}
      <div className="flex col-span-1 gap-4">
        <img
          alt="menu"
          src={HAMBURGER_MENU}
          className="h-8 cursor-pointer"
          onClick={() => toggleMenuHandler()}
        />

        <img alt="youtube-logo" src={YOUTUBE_LOGO} className="h-8" />
      </div>

      {/* Middle Section (Centered) */}
      <div className="col-span-10 flex justify-center">
        <input
          type="text"
          placeholder="Search"
          className="w-1/2 border border-gray-400 p-2 rounded-l-full focus:outline-none focus:border-blue-500"
        />
        <button className="border border-gray-400 px-5 py-2 rounded-r-full bg-gray-100 hover:bg-gray-200">
          🔍
        </button>
      </div>

      {/* Right Section */}
      <div className="col-span-1">
        <img alt="user-icon" src={USER_ICON} className="h-8" />
      </div>
    </div>
  );
};

export default Head;
