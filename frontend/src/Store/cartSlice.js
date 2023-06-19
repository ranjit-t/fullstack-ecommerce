import { createSlice } from "@reduxjs/toolkit";

const initialState = localStorage.getItem("cart")
  ? JSON.parse(localStorage.getItem("cart"))
  : { cartItems: [] };

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const addingItem = action.payload;
      const existingItem = state.cartItems.filter(
        (item) => item._id === addingItem._id
      );
      if (existingItem.length === 1) {
        state.cartItems.map(
          (item) => item._id === addingItem._id && item.quantity++
        );
      } else {
        state.cartItems = [...state.cartItems, { ...addingItem, quantity: 1 }];
      }
      localStorage.setItem("cart", JSON.stringify(state));
      console.log(state);
    },
  },
});

export const { addToCart } = cartSlice.actions;
export const cartSliceReducer = cartSlice.reducer;
