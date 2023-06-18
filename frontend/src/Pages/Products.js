import React from "react";
import products from "../data/products.js";
import { useNavigate } from "react-router-dom";

export default function Products() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center justify-center mt-4">
      {" "}
      <div className="flex flex-wrap max-w-[850px] items-center justify-center">
        {products.map((prod) => {
          return (
            <div
              key={prod._id}
              className="flex flex-col items-center justify-center w-[250px] p-4 m-2 border border-grey-400 cursor-pointer"
              onClick={() => {
                navigate(`/products/${prod._id}`);
              }}
            >
              <img
                src="https://images.unsplash.com/photo-1591337676887-a217a6970a8a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1180&q=80"
                alt={prod.name}
                width="200px"
                height="200px"
              />
              <p>{prod.name.slice(0, 20)}...</p>
              <p>
                <span>Price :</span> {prod.price} $
              </p>
              <p>{prod.description.slice(0, 50)}...</p>
              <button className="bg-sky-400 p-1 text-white">Add to Cart</button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
