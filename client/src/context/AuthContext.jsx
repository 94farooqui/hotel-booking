import { createContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      const userData = JSON.parse(atob(token.split('.')[1])); // Decode JWT
      setUser(userData);
    }
  }, []);

  const login = (token) => {
    const userData = JSON.parse(atob(token.split('.')[1])); // Decode JWT
    if(userData) console.log("Extracted from token",userData)
    setUser(userData);
    localStorage.setItem('token', token);
    navigate('/');
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
