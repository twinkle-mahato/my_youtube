import React from "react";
import { useSelector, useDispatch } from "react-redux";
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
import { closeMenu } from "../utils/appSlice";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  const dispatch = useDispatch();
  if (!isMenuOpen) return null;

  return (
    <>
      {/* Overlay – only mobile */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => dispatch(closeMenu())}
        />
      )}
      <div
        className={`
          fixed md:static top-10 h-full w-32 md:w-56 bg-white z-50
          transform transition-transform duration-300
          ${isMenuOpen ? "translate-x-0" : "-translate-x-full"}
          md:translate-x-0
        `}
      >
        {/* MAIN */}
        <ul className="space-y-1">
          <li
            onClick={() => dispatch(closeMenu())}
            className="flex items-center md:gap-3 px-2 md:px-3 py-1 md:py-2 rounded hover:bg-gray-200 cursor-pointer"
          >
            <AiFillHome className="md:w-5 md:h-5 text-gray-600" />
            <Link to="/">Home</Link>
          </li>

          <li className="flex items-center md:gap-3 px-2 md:px-3 py-1 md:py-2 rounded hover:bg-gray-200 cursor-pointer">
            <AiOutlineFire className="md:w-5 md:h-5 text-gray-600" />
            Trending
          </li>

          <li className="flex items-center md:gap-3 px-2 md:px-3 py-1 md:py-2 rounded hover:bg-gray-200 cursor-pointer">
            <MdSubscriptions className="md:w-5 md:h-5 text-gray-600" />
            Subscriptions
          </li>
        </ul>

        <hr className="my-3" />

        {/* YOU */}
        <h1 className="font-semibold text-gray-700 px-1 mb-2">You</h1>
        <ul className="space-y-1">
          <li className="flex items-center md:gap-3  px-2 py-1 md:px-3 md:py-2 rounded hover:bg-gray-200 cursor-pointer">
            <AiOutlineLike className="md:w-5 md:h-5 text-gray-600" />
            Liked videos
          </li>

          <li className="flex items-center md:gap-3  px-2 py-1 md:px-3 md:py-2 rounded hover:bg-gray-200 cursor-pointer">
            <AiOutlineHistory className="md:w-5 md:h-5 text-gray-600" />
            History
          </li>

          <li className="flex items-center md:gap-3 px-2 py-1 md:px-3 md:py-2 rounded hover:bg-gray-200 cursor-pointer">
            <MdOutlineWatchLater className="w-5 h-5 text-gray-600" />
            Watch later
          </li>
        </ul>

        <hr className="my-3" />

        {/* EXPLORE */}
        <h1 className="font-semibold text-gray-700 px-2 py-1 mb-2">Explore</h1>
        <ul className="space-y-1">
          <li className="flex items-center md:gap-3 px-2 py-1 md:px-3 md:py-2 rounded hover:bg-gray-200 cursor-pointer">
            <FaMusic className="md:w-5 md:h-5 text-gray-600" />
            Music
          </li>

          <li className="flex items-center md:gap-3 px-2 py-1 md:px-3 md:py-2 rounded hover:bg-gray-200 cursor-pointer">
            <FaGamepad className="md:w-5 md:h-5 text-gray-600" />
            Gaming
          </li>

          <li className="flex items-center md:gap-3 px-2 py-1 md:px-3 md:py-2 rounded hover:bg-gray-200 cursor-pointer">
            <FaFilm className="md:w-5 md:h-5 text-gray-600" />
            Movies
          </li>

          <li className="flex items-center md:gap-3 px-2 py-1 md:px-3 md:py-2 rounded hover:bg-gray-200 cursor-pointer">
            <FaShoppingBag className="md:w-5 md:h-5 text-gray-600" />
            Shopping
          </li>

          <li className="flex items-center md:gap-3 px-2 py-1 md:px-3 md:py-2 rounded hover:bg-gray-200 cursor-pointer">
            <MdLiveTv className="md:w-5 md:h-5 text-gray-600" />
            Live
          </li>
        </ul>

        <hr className="my-3" />

        {/* SETTINGS */}
        <h1 className="font-semibold text-gray-700 px-2 py-1 mb-2">Settings</h1>
        <ul className="space-y-1">
          <li className="flex items-center md:gap-3 px-2 py-1 md:px-3 md:py-2 rounded hover:bg-gray-200 cursor-pointer">
            <AiOutlineSetting className="md:w-5 md:h-5 text-gray-600" />
            Settings
          </li>

          <li className="flex items-center md:gap-3 px-2 py-1 md:px-3 md:py-2 rounded hover:bg-gray-200 cursor-pointer">
            <MdReport className="md:w-5 md:h-5 text-gray-600" />
            history
          </li>

          <li className="flex items-center md:gap-3 px-2 py-1 md:px-3 md:py-2 rounded hover:bg-gray-200 cursor-pointer">
            <BiHelpCircle className="md:w-5 md:h-5 text-gray-600" />
            Help
          </li>

          <li className="flex items-center md:gap-3 px-2 py-1 md:px-3 md:py-2 rounded hover:bg-gray-200 cursor-pointer">
            <MdFeedback className="md:w-5 md:h-5 text-gray-600" />
            feedback
          </li>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
