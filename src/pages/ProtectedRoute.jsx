import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useAuth } from "../context/authContext.jsx";

const PrivateRoutes = () => {
  const auth = useAuth();
  const navigate = useNavigate();
  useEffect(() => {
    if (auth.isAuthenticated === false) {
      navigate("/login", { replace: true });
    }
  }, [auth.isAuthenticated, navigate]);
  return <Outlet />;
};

export default PrivateRoutes;
