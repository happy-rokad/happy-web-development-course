import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../features/userSlice';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const user = localStorage.getItem('user');
    if (user) {
      navigate('/product'); // Redirect to products page if user is logged in
    }
  }, [navigate]);


  const handleLogin = async () => {
    try {
      const response = await axios.get(
        `http://localhost:5000/users?email=${email}&password=${password}`
      );
      if (response.data.length > 0) {
        const userData = response.data[0];
        localStorage.setItem('user', JSON.stringify(userData)); // Save user to localStorage
        dispatch(login(userData)); // Update Redux state
        navigate('/product'); // Redirect to products page
      } else {
        alert('Invalid credentials');
      }
    } catch (error) {
      console.error('Error during login:', error);
    }
  };

  return (
    <div className="container mt-5">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div className="mb-3">
          <label>Email</label>
          <input
            type="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button className="btn btn-primary">Login</button>
        <Link className="btn btn-secondary mx-2" to="/register">
                  Register
                </Link>
      </form>
    </div>
  );
};

export default Login;
