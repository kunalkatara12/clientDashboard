import axios from "axios";


const login = async (email, password) => {
  const res = await axios.post(
    "/user/login",
    { email, password },
    {
      withCredentials: true,
    }
  );
  if (res.status === 200) {
    const data = await res.data;
    return res;
  }
  return null;
};
const logout = async () => {
  const res = await axios.post("/user/logout");
  if (res.status === 200) {
    return true;
  }
  return false;
};

const signup = async (name, email, password) => {
  const res = await axios.post("/user/signup", { name, email, password },
  {
    withCredentials:true
  }
);
  if (res.status === 200) {
    const data = await res.data;
    return res;
  }
  return null;
};
const checkAuthStat = async () => {
  const res = await axios.get(
    "/user/check-auth",
    {
      withCredentials: true,
    }
  );
  if (res.status === 200) {
    const data = await res.data.data.user;
    console.log(data); 
    return data;
  }
  return null;
};
export { login, logout, signup, checkAuthStat };
