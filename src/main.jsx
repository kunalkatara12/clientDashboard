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

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route
        path="/dashboard"
        element={
          <PrivateRoutes>
            <Dashboard />
          </PrivateRoutes>
        }
      />
      <Route
        path="manage-user"
        element={
          <PrivateRoutes>
            <ManageUser />
          </PrivateRoutes>
        }
      />
      <Route
        path="manage-role"
        element={
          <PrivateRoutes>
            <ManageRole />
          </PrivateRoutes>
        }
      />
      <Route path="login" element={<Login />} />
      <Route path="signup" element={<Signup />} />
    </Route>
  )
);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
