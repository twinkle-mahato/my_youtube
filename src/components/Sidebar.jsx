import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router";

import {
  AiFillHome,
  AiOutlineLike,
  AiOutlineHistory,
  AiOutlineSetting,
  AiOutlineFire,
} from "react-icons/ai";

import {
  MdSubscriptions,
  MdVideoLibrary,
  MdLiveTv,
  MdOutlineWatchLater,
  MdFeedback,
  MdReport,
} from "react-icons/md";

import { FaMusic, FaGamepad, FaFilm, FaShoppingBag } from "react-icons/fa";
import { BiHelpCircle } from "react-icons/bi";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  if (!isMenuOpen) return null;

  return (
    <div className="p-1 md:p-4 shadow-lg md:w-56 text-sm">
      
      {/* MAIN */}
      <ul className="space-y-1">
        <li className="flex items-center md:gap-3 md:px-3 md:py-2 rounded hover:bg-gray-200 cursor-pointer">
          <AiFillHome className="md:w-5 md:h-5 text-gray-600" />
          <Link to="/">Home</Link>
        </li>

        <li className="flex items-center md:gap-3 md:px-3 md:py-2 rounded hover:bg-gray-200 cursor-pointer">
          <AiOutlineFire className="md:w-5 md:h-5 text-gray-600" />
          Trending
        </li>

        <li className="flex items-center md:gap-3 md:px-3 md:py-2 rounded hover:bg-gray-200 cursor-pointer">
          <MdSubscriptions className="md:w-5 md:h-5 text-gray-600" />
          Subscriptions
        </li>
      </ul>

      <hr className="my-3" />

      {/* YOU */}
      <h1 className="font-semibold text-gray-700 mb-2">You</h1>
      <ul className="space-y-1">
        <li className="flex items-center md:gap-3 md:px-3 md:py-2 rounded hover:bg-gray-200 cursor-pointer">
          <AiOutlineLike className="md:w-5 md:h-5 text-gray-600" />
          Liked videos
        </li>

        <li className="flex items-center md:gap-3 md:px-3 md:py-2 rounded hover:bg-gray-200 cursor-pointer">
          <AiOutlineHistory className="md:w-5 md:h-5 text-gray-600" />
          History
        </li>

        <li className="flex items-center md:gap-3 md:px-3 md:py-2 rounded hover:bg-gray-200 cursor-pointer">
          <MdOutlineWatchLater className="w-5 h-5 text-gray-600" />
          Watch later
        </li>
      </ul>

      <hr className="my-3" />

      {/* EXPLORE */}
      <h1 className="font-semibold text-gray-700 mb-2">Explore</h1>
      <ul className="space-y-1">
        <li className="flex items-center md:gap-3 md:px-3 md:py-2 rounded hover:bg-gray-200 cursor-pointer">
          <FaMusic className="md:w-5 md:h-5 text-gray-600" />
          Music
        </li>

        <li className="flex items-center md:gap-3 md:px-3 md:py-2 rounded hover:bg-gray-200 cursor-pointer">
          <FaGamepad className="md:w-5 md:h-5 text-gray-600" />
          Gaming
        </li>

        <li className="flex items-center md:gap-3 md:px-3 md:py-2 rounded hover:bg-gray-200 cursor-pointer">
          <FaFilm className="md:w-5 md:h-5 text-gray-600" />
          Movies
        </li>

        <li className="flex items-center md:gap-3 md:px-3 md:py-2 rounded hover:bg-gray-200 cursor-pointer">
          <FaShoppingBag className="md:w-5 md:h-5 text-gray-600" />
          Shopping
        </li>

        <li className="flex items-center md:gap-3 md:px-3 md:py-2 rounded hover:bg-gray-200 cursor-pointer">
          <MdLiveTv className="md:w-5 md:h-5 text-gray-600" />
          Live
        </li>
      </ul>

      <hr className="my-3" />

      {/* SETTINGS */}
      <h1 className="font-semibold text-gray-700 mb-2">Settings</h1>
      <ul className="space-y-1">
        <li className="flex items-center md:gap-3 md:px-3 md:py-2 rounded hover:bg-gray-200 cursor-pointer">
          <AiOutlineSetting className="md:w-5 md:h-5 text-gray-600" />
          Settings
        </li>

        <li className="flex items-center md:gap-3 md:px-3 md:py-2 rounded hover:bg-gray-200 cursor-pointer">
          <MdReport className="md:w-5 md:h-5 text-gray-600" />
           history
        </li>

        <li className="flex items-center md:gap-3 md:px-3 md:py-2 rounded hover:bg-gray-200 cursor-pointer">
          <BiHelpCircle className="md:w-5 md:h-5 text-gray-600" />
          Help
        </li>

        <li className="flex items-center md:gap-3 md:px-3 md:py-2 rounded hover:bg-gray-200 cursor-pointer">
          <MdFeedback className="md:w-5 md:h-5 text-gray-600" />
          feedback
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
