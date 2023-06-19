import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
// import products from "../data/products.js";
import axios from "axios";

export default function EachProduct() {
  const [products, setProducts] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    const getProducts = async () => {
      try {
        const result = await axios.get("http://localhost:5000/products");
        setProducts(result.data);
      } catch (e) {
        setProducts([]);
      }
    };
    getProducts();
  }, [id]);

  const prod = products.filter((prod) => prod._id === id)[0];

  if (products.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center mt-4">
        No products
      </div>
    );
  }
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
