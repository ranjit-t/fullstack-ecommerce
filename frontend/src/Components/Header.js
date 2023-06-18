import React from "react";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <div className="mt-4">
      <NavLink className="nav-link p-2" to="/">
        Products
      </NavLink>
      <NavLink className="nav-link p-2" to="/contact">
        Contact
      </NavLink>
    </div>
  );
}
