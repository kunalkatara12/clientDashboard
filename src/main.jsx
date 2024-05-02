import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import {
  Dashboard,
  Layout,
  Login,
  ManageRole,
  ManageUser,
  PrivateRoutes,
  Signup,
} from "./pages";
import { AuthProvider } from "./context/authContext";
import axios from "axios";
// import { CookiesProvider } from "react-cookie";
// axios.defaults.headers.common[
//   "Authorization"
// ] = `Bearer ${}`;
axios.defaults.withCredentials = true;

// axios.defaults.headers.post["Content-Type"] = "application/json";
axios.defaults.baseURL = "http://localhost:2312/api/v1";
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route element={<PrivateRoutes />}>
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="manage-user" element={<ManageUser />} />
        <Route path="manage-role" element={<ManageRole />} />
      </Route>
      <Route path="login" element={<Login />} />
      <Route path="logout" element={<Login />} />
      <Route path="signup" element={<Signup />} />
    </Route>
  )
);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <CookiesProvider> */}
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    {/* </CookiesProvider> */}
  </React.StrictMode>
);
