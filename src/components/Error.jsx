import React from "react";
import { useRouteError, Link } from "react-router";

const Error = () => {
  const err = useRouteError();

  return (
    <div className="hide-scrollbar-area fixed inset-0 z-50 flex flex-col items-center justify-center bg-white">
      <div className="text-center p-6 border shadow-xl rounded-2xl bg-white max-w-sm">
        <h1 className="text-8xl font-bold text-red-600 mb-2">
          {err.status || "404"}
        </h1>
        <h2 className="text-xl font-semibold text-gray-800">
          {err.statusText || "Something went wrong"}
        </h2>
        <p className="text-gray-500 my-4 text-sm">
          {err.data || "The page you are looking for does not exist."}
        </p>
        <Link to="/">
          <button className="bg-red-600 text-white px-6 py-2 rounded-full font-bold hover:bg-red-700 transition-all active:scale-95">
            Go Back Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Error;