import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/authContext";
import { Button } from "@mui/material";

function Topbar() {
  const auth = useAuth();
  const navigate = useNavigate();
  const handleLogout = async () => {
    await auth.logoutUser();
    navigate("/login");
  }
  return (
    <div className="flex items-center gap-2 justify-end w-full h-[10%] bg-gray-800 border-b-2 border-b-black text-white px-4">
      {!auth?.isAuthenticated ? (
        <>
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
        </>
      ) : (
        <>
          <h1 className="text-2xl mr-6">Welcome {auth?.user?.name}</h1>
          <Button
            onClick={handleLogout}
            className="px-4 py-2 bg-gray-600 rounded-md hover:bg-gray-700"
          >
            Logout
          </Button>
        </>
      )}
    </div>
  );
}

export default Topbar;
