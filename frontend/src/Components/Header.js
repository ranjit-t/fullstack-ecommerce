import React from "react";
import { NavLink } from "react-router-dom";
export default function Header() {
  return (
    <div className="flex justify-evenly mt-4">
      <a className="text-2xl font-bold text-sky-600 cursor-pointer" href="/">
        KARMAPP<sup className="text-sm">Shop</sup>
      </a>
      <div className="font-bold">
        <NavLink className="nav-link p-2 cursor-pointer" to="/">
          Products
        </NavLink>
        <NavLink className="nav-link p-2 cursor-pointer" to="/cart">
          Cart
        </NavLink>
      </div>
    </div>
  );
}
