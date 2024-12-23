import { useContext, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import AuthContext from '../context/AuthContext';

const PrivateRoute = ({ children }) => {
  const { user } = useContext(AuthContext);
  useEffect(()=>{
    console.log(user)
  },[])

  return user ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
