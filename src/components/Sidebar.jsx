import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  //  Early return pattern
  if (!isMenuOpen) return null;

  return (
    <div className="p-5 shadow-lg w-48">
      <ul>
        <li className="px-2 py-1 rounded hover:bg-gray-200 cursor-pointer">
          <Link to="/">Home</Link>
        </li>
        <li className="px-2 py-1 rounded hover:bg-gray-200 cursor-pointer">
          Shorts
        </li>
        <li className="px-2 py-1 rounded hover:bg-gray-200 cursor-pointer">
          Videos
        </li>
        <li className="px-2 py-1 rounded hover:bg-gray-200 cursor-pointer">
          Live
        </li>
      </ul>

      <h1 className="font-bold pt-5 text-gray-700 mb-2">Subscriptions</h1>
      <ul>
        <li className="px-2 py-1 rounded hover:bg-gray-200 cursor-pointer">
          Music
        </li>
        <li className="px-2 py-1 rounded hover:bg-gray-200 cursor-pointer">
          Sports
        </li>
        <li className="px-2 py-1 rounded hover:bg-gray-200 cursor-pointer">
          Gaming
        </li>
        <li className="px-2 py-1 rounded hover:bg-gray-200 cursor-pointer">
          Movies
        </li>
      </ul>

      <h1 className="font-bold pt-5 text-gray-700 mb-2">Watch Later</h1>
      <ul>
        <li className="px-2 py-1 rounded hover:bg-gray-200 cursor-pointer">
          Music
        </li>
        <li className="px-2 py-1 rounded hover:bg-gray-200 cursor-pointer">
          Sports
        </li>
        <li className="px-2 py-1 rounded hover:bg-gray-200 cursor-pointer">
          Gaming
        </li>
        <li className="px-2 py-1 rounded hover:bg-gray-200 cursor-pointer">
          Movies
        </li>
      </ul>
    </div>
  );
};



export default Sidebar;
