import axios from "axios";

const login = async (email, password) => {
  const res = await axios.post("/user/login", { email, password });
  if(res.status === 200) {
    const data = await res.data;
    return data;
  }
    return null;
};
const logout = async () => {
  const res = await axios.post("/user/logout");
  if(res.status === 200) {
    return true;
  }
    return false;
};

const signup = async (name, email, password) => {
  const res = await axios.post("/user/signup", { name, email, password });
  if(res.status === 200) {
    const data = await res.data;
    return data;
  }
    return null;
};
const checkAuthStat = async () => {
  const res = await axios.get("/user/check-auth");
  if(res.status === 200) {
    const data = await res.data;
    return data;
  }
    return null;
};
export { login, logout, signup, checkAuthStat };