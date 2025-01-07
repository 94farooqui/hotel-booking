import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    //console.log("From Auth Context")
    const checkTokenValidity = async (token) => {
      console.log("Checking token validity")
      const isTokenValid = await axios.get("http://localhost:5000/api/auth/verifyToken" , {
        headers:{
          Authorization : `Bearer ${token}`
        }
      })

      if(isTokenValid.status == 200){
        console.log("Token is valid ",isTokenValid)
        setLoading(false);
        setUser(isTokenValid.data);
      }
      if(isTokenValid.status == 401){

      }
    }
    setLoading(true);
    const token = localStorage.getItem("token");
    if (token) {
      
      //const userData = JSON.parse(atob(token.split(".")[1])); // Decode JWT
      checkTokenValidity(token)

    }
  }, []);

  const login = (token) => {
    setLoading(true);
    const userData = JSON.parse(atob(token.split(".")[1])); // Decode JWT
    if (userData) {
      setLoading(false)
      console.log("Extracted from token", userData);
      setUser(userData);
      localStorage.setItem("token", token);
      navigate("/");
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout,loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
