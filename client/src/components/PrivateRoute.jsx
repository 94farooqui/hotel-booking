import { useContext, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import AuthContext from '../context/AuthContext';

const PrivateRoute = ({ children }) => {
  const { user,loading } = useContext(AuthContext);
  useEffect(()=>{
    console.log("Hello")
    console.log(user)
  },[loading])

  if(loading) {
    return <p>Loading</p>
  }

  return user ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
