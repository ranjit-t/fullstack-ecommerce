import React, { useState, useEffect } from "react";

import { NavLink } from "react-router-dom";
export default function Header({
  isLogged,
  setIsLogged,
  curUser,
  cartChanged,
}) {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    setCartItems(
      localStorage.getItem("cart")
        ? JSON.parse(localStorage.getItem("cart"))
        : []
    );
  }, [curUser, cartChanged, cartItems]);

  const [totalQuantity, setTotalQuantity] = useState(0);
  useEffect(() => {
    const qty = cartItems.reduce((acc, item) => acc + item.quantity, 0);
    setTotalQuantity(qty);
  }, [cartItems, cartChanged, curUser]);

  return (
    <div className="flex justify-evenly  bg-gray-200 p-6">
      <a className="text-2xl font-bold text-sky-600 cursor-pointer" href="/">
        KARMAPP<sup className="text-sm">Shop</sup>
      </a>
      <div className="font-bold">
        <NavLink className="nav-link p-2 cursor-pointer" to="/">
          Products
        </NavLink>
        <NavLink className="nav-link p-2 cursor-pointer" to="/cart">
          Cart <sup>{totalQuantity}</sup>
        </NavLink>
        {!isLogged && (
          <NavLink className="nav-link p-2 cursor-pointer" to="/login">
            Login
          </NavLink>
        )}
        {isLogged && (
          <button
            className="nav-link p-2 cursor-pointer"
            onClick={() => {
              localStorage.removeItem("login-token");
              localStorage.removeItem("cart");
              setIsLogged(false);
              window.location.reload();
            }}
          >
            Logout
          </button>
        )}
      </div>
    </div>
  );
}
