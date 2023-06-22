import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
// import getCartItems from "../Utils/GetCartItems";
import { AddToCart, RemoveFromCart } from "../Utils/ModifCartItems";

export default function Cart({ curUser, cartChanged, setcartChanged }) {
  const navigate = useNavigate();

  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    setCartItems(
      localStorage.getItem("cart")
        ? JSON.parse(localStorage.getItem("cart"))
        : []
    );
  }, [curUser, cartChanged]);

  const [totalPrice, setTotalPrice] = useState(0);
  useEffect(() => {
    const price = cartItems.reduce(
      (acc, item) => acc + item.quantity * item.price,
      0
    );
    setTotalPrice(price.toFixed(2));
  }, [cartItems, cartChanged]);

  if (cartItems.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center mt-4">
        <div className="flex flex-col items-center justify-center my-4 text-xl font-bold">
          Cart Items
        </div>
        <div>No Items in the Cart</div>
      </div>
    );
  }
  return (
    <div className="pb-20">
      <div className="my-4 text-xl font-bold">Cart Items</div>
      <table className="flex flex-col gap-y-4">
        <thead className="flex justify-center ">
          <tr className="flex justify-evenly  w-[100%] border border-grey-400">
            <th className="w-1/3 text-center">Item</th>
            <th className="w-1/3 text-center">Price</th>
            <th className="w-1/3 text-center">Quantity</th>
          </tr>
        </thead>
        <tbody className="flex flex-col justify-center gap-y-4">
          {cartItems.map((item) => {
            return (
              <tr
                key={item._id}
                className="flex justify-evenly items-center w-[100%] border border-grey-400 p-2"
              >
                <td
                  className="w-1/3 text-center flex flex-col justify-center items-center cursor-pointer "
                  onClick={() => {
                    navigate(`/products/${item._id}`);
                  }}
                >
                  <img src={item.image} alt={item.name} width="100px" />{" "}
                  <p>{item.name.slice(0, 30)}...</p>
                </td>
                <td className="w-1/3 text-center">{item.price} €</td>
                <td className="w-1/3 text-center">
                  <div>
                    <div>
                      <button
                        className="bg-sky-400 px-2 active:bg-sky-600 mx-2"
                        onClick={async () => {
                          item.userEmail = curUser?.email;
                          await RemoveFromCart(curUser?.email, item, false);
                          setcartChanged((prev) => !prev);
                        }}
                      >
                        -
                      </button>
                      {item.quantity}
                      <button
                        className="bg-sky-400 px-2 active:bg-sky-600 mx-2"
                        onClick={async () => {
                          item.userEmail = curUser?.email;
                          await AddToCart(curUser?.email, item);
                          setcartChanged((prev) => !prev);
                        }}
                      >
                        +
                      </button>
                    </div>
                    <div className="mt-2 text-red-400 active:text-red-600">
                      <button
                        onClick={async () => {
                          item.userEmail = curUser?.email;
                          await RemoveFromCart(curUser?.email, item, true);
                          setcartChanged((prev) => !prev);
                        }}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="mt-4 text-lg font-bold flex justify-evenly">
        <p>
          <span>{`Total : ${totalPrice} €`}</span>
        </p>
        <button className="bg-yellow-500 px-2 text-white hover:bg-yellow-600">{`Check Out >>`}</button>
      </div>
    </div>
  );
}
