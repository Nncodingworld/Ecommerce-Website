import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice'; // Import your slice reducer

export const store = configureStore({
  reducer: {
    cart: cartReducer, // Attach the cart reducer
  },
});
