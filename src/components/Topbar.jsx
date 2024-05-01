import React from "react";
import { Link } from "react-router-dom"; // Assuming you're using React Router for navigation

function Topbar() {
  return (
    <div className="flex items-center justify-end w-full h-[15%] bg-gray-800 border-b-2 border-b-black text-white px-4">
      <Link
        to="/login"
        className="px-4 py-2 bg-gray-600 rounded-md mr-2 hover:bg-gray-700"
      >
        Login
      </Link>
      <Link
        to="/signup"
        className="px-4 py-2 bg-gray-600 rounded-md hover:bg-gray-700"
      >
        Sign Up
      </Link>
    </div>
  );
}

export default Topbar;
