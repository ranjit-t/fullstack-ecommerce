import React, { useState, useEffect } from "react";
//Redux
import { useSelector } from "react-redux";

export default function Cart() {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const [totalPrice, setTotalPrice] = useState(0);
  useEffect(() => {
    const price = cartItems.reduce(
      (acc, item) => acc + item.quantity * item.price,
      0
    );
    setTotalPrice(price.toFixed(2));
  }, [cartItems]);
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
    <div>
      <div className="flex flex-col items-center justify-center my-4">
        Cart Items
      </div>
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
              <tr key={item._id} className="flex justify-evenly w-[100%] ">
                <td className="w-1/3 text-center">
                  {item.name.slice(0, 20)}...{" "}
                </td>
                <td className="w-1/3 text-center">{item.price}</td>
                <td className="w-1/3 text-center">{item.quantity}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="mt-4 text-xl font-bold">
        <span>{`Total : ${totalPrice} €`}</span>
      </div>
    </div>
  );
}
