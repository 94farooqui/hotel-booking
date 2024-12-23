import { useContext, useState } from 'react';
import { loginUser } from '../api/auth';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import AuthContext from '../context/AuthContext';

const Login = () => {
  const {login} = useContext(AuthContext)
  const [credentials, setCredentials] = useState({
    email: '',
    password: '',
  });
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    try {
      const data = await loginUser(credentials);
      if(data){
        console.log("login response",data)
        login(data.token)
        localStorage.setItem('token', data.token); // Store token
        navigate('/');
      }

    } catch (error) {
      setError(error.response?.data?.message || 'Login failed');
    }
  };

  return (
    <div>
      <Navbar />
      <div className="container mx-auto my-10">
        <h1 className="text-3xl font-bold mb-6">Login</h1>
        <form onSubmit={handleSubmit} className="max-w-md mx-auto">
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={credentials.email}
            onChange={handleChange}
            className="w-full mb-4 p-2 border"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={credentials.password}
            onChange={handleChange}
            className="w-full mb-4 p-2 border"
          />
          {error && <p className="text-red-600 mb-4">{error}</p>}
          <button type="submit" className="bg-blue-600 text-white px-4 py-2">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
