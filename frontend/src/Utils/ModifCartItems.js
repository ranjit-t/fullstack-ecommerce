import getCartItems from "./GetCartItems.js";
import axios from "axios";

export const AddToCart = async (email, productToAdd) => {
  let cartItems;
  try {
    const cartItemsdata = await getCartItems(email);
    cartItems = cartItemsdata;
  } catch (error) {
    cartItems = localStorage.getItem("cart")
      ? JSON.parse(localStorage.getItem("cart"))
      : [];
  }

  const existingItem = cartItems.filter(
    (item) => item._id === productToAdd._id
  );
  if (existingItem.length === 1) {
    cartItems.map((item) => item._id === productToAdd._id && item.quantity++);
  } else {
    cartItems = [...cartItems, { ...productToAdd, quantity: 1 }];
  }

  //   Storing data on Server

  localStorage.setItem("cart", JSON.stringify(cartItems));

  if (email !== undefined) {
    axios
      .post("http://localhost:5000/shop/addcartitems", {
        email: productToAdd.userEmail,
        cartItems: cartItems,
      })
      .catch((e) => {
        // console.log(e.response.data);
      });
  }
};

export const RemoveFromCart = async (email, productToAdd) => {
  let cartItems;
  try {
    const cartItemsdata = await getCartItems(email);
    cartItems = cartItemsdata;
  } catch (error) {
    cartItems = localStorage.getItem("cart")
      ? JSON.parse(localStorage.getItem("cart"))
      : [];
  }

  const existingItem = cartItems.filter(
    (item) => item._id === productToAdd._id
  );
  if (existingItem[0].quantity > 1) {
    cartItems.map((item) => item._id === productToAdd._id && item.quantity--);
  } else if (existingItem[0].quantity === 1) {
    cartItems = cartItems.filter((item) => item._id !== productToAdd._id);
  }

  //   Storing data on Server

  localStorage.setItem("cart", JSON.stringify(cartItems));

  if (email !== undefined) {
    axios
      .post("http://localhost:5000/shop/addcartitems", {
        email: productToAdd.userEmail,
        cartItems: cartItems,
      })
      .catch((e) => {
        console.log(e.response.data);
      });
  }
};
