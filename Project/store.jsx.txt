import { configureStore } from '@reduxjs/toolkit';
import userReducer from './features/userSlice';  // Import the userSlice reducer
import cartReducer from './features/cartSlice';  // Import the cartSlice reducer

// Configure the Redux store
const store = configureStore({
    reducer: {
        user: userReducer, // Handle user authentication and profile
        cart: cartReducer, // Handle the user's cart and cart-related operations
    },
});

export default store;
