import { BASE_URL } from "../ConnectionServer";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

const useAuth = () => {
  const [user, setUser] = useState(null);
  const[isLogged,setIsLogged]=useState(false)
  const navigate = useNavigate();
  let location = useLocation();
  const [localUser, setlocalUser] = useState([]);

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem('user'));
    if (items) {
        setlocalUser(items);
    }
  }, []);
  const login = async (data) => {
    try {
      const authResult = await axios.post(`${BASE_URL}/user/api/login`, data);
     
        // console.log(authResult.data,"response");
      const userObj = {
        status:true,
        user:authResult.data.user,
        token: authResult.data.token,
      };
      setUser(userObj);

    //    console.log(userObj,"user object ");
      localStorage.setItem("user", JSON.stringify(userObj));
      setIsLogged(true);
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
      const userObj = {
        user:authresult.data.user,
        token: authresult.data.token,
      };

      setUser(userObj);
      toast("Sign Up Successfull");
      navigate('/')
    } catch (err) {
      console.error(err);
       toast("Something Wrong");
      console.log("An Error Occuered");
    }
  };

  const logout = (status) => {
    setUser(null);
    setIsLogged(status)
    localStorage.removeItem('user');
  };
  return { localUser,user,isLogged,setIsLogged, login, signUp, logout };
};
export default useAuth;
