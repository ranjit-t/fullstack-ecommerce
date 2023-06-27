import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Profile({ curUser }) {
  const [orders, setOrders] = useState([]);
  const navigate = useNavigate();

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
    <div className="pb-16 flex flex-col justify-center items-center">
      <p className="text-xl font-bold mt-4 ">Orders</p>
      <div>
        {orders.map((order) => {
          return (
            <div
              key={order.paidAt + order._id}
              className="flex flex-col justify-center items-center border border-gray-300 m-4 max-w-[800px] p-6 cursor-pointer"
              onClick={() => {
                navigate(`/order/${order._id}`);
              }}
            >
              <p>
                <span className="font-bold">Order Number :</span> {order._id}
              </p>
              <p>
                <span className="font-bold">Paid Amount :</span>{" "}
                {order.totalPrice}€
              </p>
              <p>
                <span className="font-bold">Paid at :</span> {order.paidAt}
              </p>
              <p className="bg-green-500 text-white p-2 mt-2">
                <span className="font-bold">Delivered :</span>{" "}
                {order.delivered ? "Yes" : "No"}
              </p>

              {/* {order.orderItems.map((item) => {
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
              })} */}
            </div>
          );
        })}
      </div>
    </div>
  );
}
