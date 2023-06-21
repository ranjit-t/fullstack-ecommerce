import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

let curUser;

const initialState = localStorage.getItem("cart")
  ? JSON.parse(localStorage.getItem("cart"))
  : { cartItems: [], curUser };

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    getUser(state, action) {
      // state.curUser = action.payload;
      let cartItemsData;
      try {
        const getCartItems = async () => {
          const result = await axios.post(
            "http://localhost:5000/shop/getcartitems",
            {
              email: action.payload,
            }
          );
          console.log(result.data.cartItems);
          cartItemsData = result.data.cartItems;
          state = { cartItems: [...cartItemsData], curUser };
          // console.log(state.cartItems);
        };
        getCartItems();
        // state.cartItems = { cartItems };
      } catch (e) {
        console.log(e);
      }
    },

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
      //Storing data on Server
      axios
        .post("http://localhost:5000/shop/addcartitems", {
          email: addingItem.userEmail,
          cartItems: state.cartItems,
        })
        .then((data) => {
          console.log(data);
        })
        .catch((e) => {
          console.log(e.response.data);
        });
    },
  },
});

export const { addToCart, getUser } = cartSlice.actions;
export const cartSliceReducer = cartSlice.reducer;
