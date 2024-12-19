import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../features/userSlice';
import { loadCartFromStorage } from '../features/cartSlice';


const Header = () => {
  const cart = useSelector((state) => state.cart.items); // Access cart items
  const user = useSelector((state) => state.user); // Access user state
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Calculate the total count of items in the cart
  const cartCount = cart.reduce((count, item) => count + item.quantity, 0);

  // Handle Logout
  const handleLogout = () => {
    dispatch(logout()); // Reset cart in Redux state on logout
    navigate('/'); // Redirect to home page or login page after logout
  };

  useEffect(() => {
    // If user is logged in, try to load their cart from localStorage
    if (user.isLoggedIn) {
      const userEmail = user.userInfo?.email;
      const storedCart = JSON.parse(localStorage.getItem(`cart_${userEmail}`));
      if (storedCart) {
        dispatch(loadCartFromStorage(storedCart)); // Update Redux cart state from localStorage
      }
    }
  }, [dispatch, user]);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        {/* Brand */}
        <Link className="navbar-brand" to="/products">
          E-Shop
        </Link>

        {/* Toggle Button for Mobile */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navigation Links */}
        <div
          className="collapse navbar-collapse"
          id="navbarNav"
          style={{ display: 'flex', justifyContent: 'end' }}
        >
          <div className="d-flex align-items-center">
            {/* Check if user is logged in */}
            {user.isLoggedIn ? (
              <>
                {/* Display user info */}
                <span className="navbar-text text-light mx-2">
                  Welcome, {user.userInfo?.email}
                </span>
                <button className="btn btn-danger mx-2" onClick={handleLogout}>
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link className="btn btn-primary mx-2" to="/">
                  Login
                </Link>
              </>
            )}
            <Link className="btn btn-success" to="/cart">
              Cart ({cartCount}) {/* Updated Cart Count */}
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
