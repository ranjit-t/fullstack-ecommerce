import React from "react";
import { useParams } from "react-router-dom";
import products from "../data/products.js";

export default function EachProduct() {
  const { id } = useParams();
  const prod = products.filter((prod) => prod._id === id)[0];
  console.log(prod);
  return (
    <div className="flex flex-col items-center justify-center gap-y-8">
      <p className="mt-4 text-2xl font-bold">{prod.name}</p>
      <img src={prod.image} alt={prod.name} width="400px" height="400px" />
      <p className="text-xl">
        <span>Price :</span> {prod.price} $
      </p>
      <button className="bg-sky-400 p-1 text-white">Add to Cart</button>
      <p>{prod.description}...</p>
      <p className="text-yellow-500 text-2xl">
        {" "}
        &#9733;{" "}
        <span className="text-lg">
          {prod.rating}/5 - {prod.numReviews} Reviews
        </span>
      </p>
    </div>
  );
}
