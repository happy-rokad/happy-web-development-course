import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { loadCartFromStorage } from './features/cartSlice';
import { login } from './features/userSlice';
import Header from './components/Header';
import Login from './pages/Login';
import Product from './pages/Products';
import Cart from './pages/Cart';
import Register from './pages/Register';
import Products from './pages/Products';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (storedUser) {
      dispatch(login(storedUser));
      dispatch(loadCartFromStorage());
    }
  }, [dispatch]);

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/product" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Router>
  );
};

export default App;
