import React, { useEffect, useState } from "react";
import {
  HAMBURGER_MENU,
  USER_ICON,
  YOUTUBE_LOGO,
  YOUTUBE_SEARCH_API,
} from "../utils/constants";
import { toggleMenu } from "../utils/appSlice";
import { useDispatch, useSelector } from "react-redux";
import { cacheResults } from "../utils/searchSlice";
import { Link, useNavigate, useLocation } from "react-router";

const Head = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const searchCache = useSelector((store) => store.search);

  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();

  /* ---------------- CLEAR INPUT WHEN BACK TO HOME ---------------- */
  useEffect(() => {
    if (location.pathname === "/") {
      setSearchQuery("");
      setSuggestions([]);
      setShowSuggestions(false);
    }
  }, [location.pathname]);

  /**
   * searchCache = {
   *   "iphone" = ["iphone 11", "iphone 14"]
   * }
   *
   *  searchQuery = iphone
   */
  /* ---------------- FETCH SUGGESTIONS (DEBOUNCED) ---------------- */
  const getSearchSuggestions = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    console.log(json[1]);
    setSuggestions(json[1]);

    //update cache
    dispatch(
      cacheResults({
        [searchQuery]: json[1],
      }),
    );
  };

  useEffect(() => {
    //make an api call after every key press
    //but if difference between 2 api calls is less then 200ms [<200ms]
    // decline the api call
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery]);
      } else {
        getSearchSuggestions();
      }
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  /* ---------------- HANDLERS ---------------- */
  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  const handleSuggestionClick = (suggestion) => {
    setSearchQuery(suggestion); // 👈 put text in input
    setShowSuggestions(false); // close dropdown
  };

  const handleSearch = () => {
    if (!searchQuery.trim()) return;
    setShowSuggestions(false);
    navigate(`/results?search_query=${searchQuery}`);
  };

  /**
   *
   * key - i
   * - render the component
   * - useEffect();
   * - start timer => make api call after 200ms
   *
   * key -ip
   * - destory the component and call useEfffect return method
   * - re-render the component
   * - useEffect();
   * - start timer => make api call after 200ms
   */

  return (
    <div
      className=" w-full
     items-center justify-between
    px-2 md:px-6 grid grid-flow-col
    py-2 md:py-3
    bg-white shadow-sm
    sticky top-0 z-50"
    >
      {/* Left Section */}
      <div className="flex col-span-1 items-center gap-1 md:gap-2 md:min-w-37.5">
        <img
          alt="menu"
          src={HAMBURGER_MENU}
          className=" h-5 md:h-8 cursor-pointer"
          onClick={() => toggleMenuHandler()}
        />

        <img alt="youtube-logo" src={YOUTUBE_LOGO} className="h-3 md:h-6" />
      </div>

      {/* Middle Section (Centered) */}
      <div className=" md:col-span-10 md:px-10 relative">
        <div className=" flex justify-center">
          <input
            type="text"
            placeholder="Search"
            className=" px-3 md:px-5 w-1/2 border border-gray-400 md:p-2 rounded-l-full focus:outline-none focus:border-blue-500 z-50 text-sm md:text-base"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggestions(true)}
            onKeyDown={(e) => {
              if (e.key === "Enter") handleSearch();
            }}
          />

          <button
            onClick={handleSearch}
            className="border border-gray-400 px-2 md:px-5 md:py-2 rounded-r-full bg-gray-100 hover:bg-gray-200"
          >
            🔍
          </button>
        </div>

        {/* Suggestions Box */}
        {showSuggestions && suggestions.length > 0 && (
          <div className="absolute  top-8 md:top-12 left-[14%] md:left-[25%] bg-white md:py-2 md:w-124 shadow-lg rounded-lg border border-gray-100 z-50">
            <ul>
              {suggestions.map((suggestion) => (
                <li
                  key={suggestion}
                  className="py-2 px-2 md:px-3 hover:bg-gray-100 cursor-pointer"
                  onMouseDown={() => handleSuggestionClick(suggestion)}
                >
                  🔍 {suggestion}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Right Section */}
      <div className="flex items-center justify-end md:min-w-37.5">
        <img
          alt="user-icon"
          src={USER_ICON}
          className=" h-5 md:h-8 cursor-pointer"
        />
      </div>
    </div>
  );
};

export default Head;
