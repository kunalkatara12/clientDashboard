import React from "react";
import { Link } from "react-router-dom"; // Assuming you're using React Router for navigation

function Sidebar() {
  return (
    <div className="flex w-[12%] flex-col items-start justify-center h-full bg-gray-800 text-white p-4">
      <ul className="space-y-2">
        <li>
          <Link to="/dashboard" className="hover:text-blue-500">
            Dashboard
          </Link>
        </li>
        <li>
          <Link to="/manage-user" className="hover:text-blue-500">
            Manage User
          </Link>
        </li>
        <li>
          <Link to="/manage-role" className="hover:text-blue-500">
            Manage Role
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
