import { BASE_URL } from "../ConnectionServer";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

const useAuth = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  let location = useLocation();
  useEffect(() => {
    console.log(user,"UseEffect USer");
    // const storedUser = localStorage.getItem("user");
    // if (storedUser) {
      setUser(user);
    // }
  }, []); 

  const login = async (data) => {
    try {
      const authResult = await axios.post(`${BASE_URL}/user/api/login`, data);
     
        console.log(authResult.data,"response");
      const userObj = {
        user:authResult.data.user,
        token: authResult.data.token,
      };
      setUser(userObj);

       console.log(userObj,"user object ");
      localStorage.setItem("user", JSON.stringify(userObj));
      toast("Login Successfull");
      navigate((location.state && location.state.from) || "/"); // Check if location.state is truthy
    } catch (error) {
      toast("Something Wrong");
      console.error(error);
    }
  };

  const signUp = async (data) => {
    try {
      let authresult = await axios.post(`${BASE_URL}/user/api/register`, data);
      let userObj = { ...authresult.user?.user };
      userObj.token = authresult.user?.token;
      setUser(userObj);
      console.log("Sign Up Successfull");
    } catch (err) {
      console.error(err);
       toast("Something Wrong");
      console.log("An Error Occuered");
    }
  };

  const logout = () => {
    setUser(null);
  };
  return { user, login, signUp, logout };
};
export default useAuth;
