import React from "react";
import { useParams } from "react-router-dom";
import products from "../data/products.js";

export default function EachProduct() {
  const { id } = useParams();
  const prod = products.filter((prod) => prod._id === id)[0];
  console.log(prod);
  return (
    <div className="flex flex-col items-center justify-center">
      <p className="mt-4 text-2xl font-bold">{prod.name}</p>
      <img
        src="https://images.unsplash.com/photo-1591337676887-a217a6970a8a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1180&q=80"
        alt={prod.name}
        width="400px"
        height="400px"
      />
      <p>
        <span>Price :</span> {prod.price} $
      </p>
      <button className="bg-sky-400 p-1 text-white">Add to Cart</button>
      <p>{prod.description}...</p>
    </div>
  );
}
