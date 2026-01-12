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

const Head = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const searchCache = useSelector((store) => store.search);

  const dispatch = useDispatch();
  /**
   * searchCache = {
   *   "iphone" = ["iphone 11", "iphone 14"]
   * }
   *
   *  searchQuery = iphone
   */

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

    const getSearchSuggestions = async () => {
    console.log("API CALL - " + searchQuery);
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    //console.log(json[1]);
    setSuggestions(json[1]);

    //update cache
    dispatch(cacheResults({
      [searchQuery] : json[1],
    }))
  };

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
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
    <div className="w-full grid grid-flow-col items-center justify-between px-6 py-3 bg-white shadow-sm sticky top-0 z-50">
      {/* Left Section */}
      <div className="flex col-span-1 items-center gap-4 min-w-[150px]">
        <img
          alt="menu"
          src={HAMBURGER_MENU}
          className="h-8 cursor-pointer"
          onClick={() => toggleMenuHandler()}
        />

        <img alt="youtube-logo" src={YOUTUBE_LOGO} className="h-8" />
      </div>

      {/* Middle Section (Centered) */}
      <div className="col-span-10 px-10 relative">
        <div className=" flex justify-center">
          <input
            type="text"
            placeholder="Search"
            className=" px-5 w-1/2 border border-gray-400 p-2 rounded-l-full focus:outline-none focus:border-blue-500 z-50"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setShowSuggestions(false)}
          />
          <button className="border border-gray-400 px-5 py-2 rounded-r-full bg-gray-100 hover:bg-gray-200">
            🔍
          </button>
        </div>

        {/* Suggestions Box */}
        {showSuggestions && suggestions.length > 0 && (
          <div className="absolute top-[48px] left-[25%] bg-white py-2 w-[31rem] shadow-lg rounded-lg border border-gray-100 z-50">
            <ul>
              {suggestions.map((suggestion) => (
                <li
                  key={suggestion}
                  className="py-2 px-3 hover:bg-gray-100"
                  onMouseDown={() => {
                    setSearchQuery(suggestion);
                    setShowSuggestions(false);
                  }}
                >
                  🔍 {suggestion}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Right Section */}
      <div className="flex items-center justify-end min-w-[150px]">
        <img alt="user-icon" src={USER_ICON} className="h-8 cursor-pointer" />
      </div>
    </div>
  );
};

export default Head;
