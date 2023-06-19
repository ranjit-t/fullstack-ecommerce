import React, { useEffect, useState } from "react";
// import products from "../data/products.js";
import { useNavigate } from "react-router-dom";
import axios from "axios";

//Redux
import { useDispatch } from "react-redux";
import { addToCart } from "../ReduxStore/cartSlice";

export default function Products() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const result = await axios.get("http://localhost:5000/products");
        setProducts(result.data);
        setLoading(false);
      } catch (e) {
        setProducts([]);
        setLoading(false);
      }
    };
    getProducts();
  }, []);

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center mt-4">
        ...Loading
      </div>
    );
  }

  if (products.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center mt-4">
        No products
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center mt-4">
      {" "}
      <div className="flex flex-wrap max-w-[850px] items-center justify-center">
        {products.map((prod) => {
          return (
            <div
              key={prod._id}
              className="flex flex-col items-center justify-center w-[250px] p-4 m-2 border border-grey-400 gap-y-2"
            >
              <div
                className="flex flex-col cursor-pointer gap-y-2"
                onClick={() => {
                  navigate(`/products/${prod._id}`);
                }}
              >
                {" "}
                <img
                  src={prod.image}
                  alt={prod.name}
                  className="w-[200Px] h-[200Px] object-cover"
                />
                <p className="font-bold">{prod.name.slice(0, 20)}...</p>
                <p className="text-xl">
                  <span>Price :</span> {prod.price} $
                </p>
                <p>{prod.description.slice(0, 50)}...</p>
              </div>
              <p className="text-yellow-500 text-xl">
                {" "}
                &#9733;{" "}
                <span className="text-sm">
                  {prod.rating}/5 - {prod.numReviews} Reviews
                </span>
              </p>
              <button
                className="bg-sky-400 p-1 text-white"
                onClick={() => {
                  // alert("hello");
                  const productToAdd = products.filter(
                    (product) => product._id === prod._id
                  )[0];
                  dispatch(addToCart(productToAdd));
                }}
              >
                Add to Cart
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
