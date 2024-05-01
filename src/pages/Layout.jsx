import { Outlet } from "react-router-dom";
import { Sidebar, Topbar } from "../components";
import { useAuth } from "../context/authContext";

export default function Layout() {
  const { isAuthenticated } = useAuth();
  return (
    <div className="w-full h-screen ">
      <Topbar />
      <div className="flex h-[85%]">
        {isAuthenticated && <Sidebar />}
        <Outlet />
      </div>
    </div>
  );
}
