import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    console.log("From Auth Context")
    setLoading(true);
    const token = localStorage.getItem("token");
    if (token) {
      const userData = JSON.parse(atob(token.split(".")[1])); // Decode JWT
      setLoading(false);
      setUser(userData);
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
