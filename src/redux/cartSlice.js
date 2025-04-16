import {createSlice} from "@reduxjs/toolkit";
const initialState = {
    cartItems: [] // Use colon instead of equal sign
  };
  
  const cartSlice = createSlice({  // Renamed createSlice to cartSlice
    name: "cart",
    initialState,
    reducers: {
      addToCart: (state, action) => {
        const existingItem = state.cartItems.find(
          (item) => item.id === action.payload.id  // Fixed 'Payload' to 'payload'
        );
        if (!existingItem) {
          state.cartItems.push({ ...action.payload, quantity: 1 });  // Fixed 'playload' to 'payload'
        }
      },
      removeFromCart: (state, action) => {
        state.cartItems = state.cartItems.filter(
          (item) => item.id !== action.payload.id  // Fixed 'Payload' to 'payload'
        );
      },
      increaseQuantity: (state, action) => {
        const itemIndex = state.cartItems.findIndex(
          (item) => item.id === action.payload.id  // Fixed missing parenthesis
        );
        if (itemIndex >= 0) {
          state.cartItems[itemIndex].quantity += 1;
        }
      },
      decreaseQuantity:(state, action)=> {
        const itemIndex =state.cartItems.findIndex(
            (item) => item.id === action.payload.id
        )
        if(itemIndex >= 0 && state.cartItems[itemIndex].quantity > 1){
            state.cartItems[itemIndex].quantity -=1
        } else if(state.cartItems[itemIndex].quantity===1){
            state.cartItems= state.cartItems.filter(
                (item) => item.id !== action.payload.id
            )
        }
      }
    }
  });
  
export const{addToCart, removeFromCart, increaseQuantity,decreaseQuantity} = cartSlice.actions
export default cartSlice.reducer