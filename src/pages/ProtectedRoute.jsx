import { Navigate } from "react-router-dom";
import { useAuth } from "../context/authContext.jsx";
const PrivateRoutes = ({ children }) => {
  const { isAuthenticated } = useAuth();
  if (!isAuthenticated) {
    console.log("not authenticated");
    return <Navigate to="/login" />;
  } else {
    console.log("authenticated");
    return children;
  }
};

export default PrivateRoutes;
