import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name: 'cart',
    initialState: { items: [] },
    reducers: {
        addToCart(state, action) {
            const existingItem = state.items.find(item => item.id === action.payload.id);
            if (existingItem) {
                existingItem.quantity += action.payload.quantity;
            } else {
                state.items.push(action.payload);
            }

            const userEmail = JSON.parse(localStorage.getItem('user'))?.email;
            if (userEmail) {
                localStorage.setItem(`cart_${userEmail}`, JSON.stringify(state.items));
            }
        },
        removeFromCart(state, action) {
            state.items = state.items.filter(item => item.id !== action.payload.id);

            const userEmail = JSON.parse(localStorage.getItem('user'))?.email;
            if (userEmail) {
                localStorage.setItem(`cart_${userEmail}`, JSON.stringify(state.items));
            }
        },
        loadCartFromStorage(state) {
            const userEmail = JSON.parse(localStorage.getItem('user'))?.email;
            if (userEmail) {
                const storedCart = JSON.parse(localStorage.getItem(`cart_${userEmail}`));
                state.items = storedCart || [];
            }
        },
    },
});

export const { addToCart, removeFromCart, loadCartFromStorage } = cartSlice.actions;
export default cartSlice.reducer;
