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
        setOrders(response.data);
        console.log(response.data);
      } catch (error) {
        console.log(error.response.data);
        setOrders([]);
      }
    };

    checkLoginStatus();
  }, [curUser]);

  return <div>Profile</div>;
}
