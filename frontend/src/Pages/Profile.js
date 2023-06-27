import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Profile({ curUser }) {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    console.log(curUser?.email);
    const checkLoginStatus = async () => {
      try {
        const response = await axios.post(
          "http://localhost:5000/shop/getordereditems",
          { email: curUser?.email },
          {
            withCredentials: true, // Enable sending and receiving cookies
          }
        );
        setOrders(response.data.orders);
        console.log(response.data.orders);
      } catch (error) {
        console.log(error.response.data);
        setOrders([]);
      }
    };

    checkLoginStatus();
  }, [curUser]);

  return (
    <div className="pb-16">
      <p className="text-xl font-bold mt-4 ">Orders</p>
      <div>
        {orders.map((order) => {
          return (
            <div className="flex flex-col justify-center items-center border border-gray-300 m-4 w-screen">
              {/* <p>num of items = {order.orderItems.length}</p> */}
              {order.orderItems.map((item) => {
                return (
                  <div className="flex justify-between items-between w-[80%]">
                    <img
                      src={item.image}
                      alt={item.name}
                      width="80px"
                      className="m-2 max-h-[40px] object-cover"
                    />
                    <p>{item.name.slice(0, 20)}...</p>
                    <p>{item.price} euros</p>
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
}
