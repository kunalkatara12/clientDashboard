import { createContext, useEffect,useState,useContext } from "react";
import { checkAuthStat, login, logout, signup } from "../helpers/apiComm.js";

const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  useEffect(() => {
    async function checkAuth() {
      const data = await checkAuthStat();
      if (data) {
        setUser({
          email: data.email,
          name: data.name,
        });
        setIsAuthenticated(true);
      }
    }
    checkAuth();
  }, []);
  const loginUser = async (email, password) => {
    const data = await login(email, password);
    if (data) {
      setUser({
        email: data.email,
        name: data.name,
      });
      setIsAuthenticated(true);
    }
  };
  const logoutUser = async () => {
    const data = await logout();
    if (data === true) {
      setUser(null);
      setIsAuthenticated(false);
    }
  };
  const signupUser = async (name, email, password) => {
    const data = await signup(name, email, password);
    if (data) {
      setUser({
        email: data.email,
        name: data.name,
      });
      setIsAuthenticated(true);
    }
  };
  const value = { user, isAuthenticated, loginUser, logoutUser, signupUser };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
export const useAuth = () => useContext(AuthContext);
