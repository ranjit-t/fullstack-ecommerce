import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import getCartItems from "../Utils/GetCartItems";

export default function Login({ isLogged, setIsLogged, setCurUser, curUser }) {
  const navigate = useNavigate();

  useEffect(() => {
    isLogged && navigate("/");
  }, [isLogged, navigate]);

  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    //Login
    try {
      const response = await axios.post(
        "http://localhost:5000/user/login",
        {
          email,
          password,
        },
        {
          withCredentials: true, // Enable sending and receiving cookies
        }
      );
      const { data } = response;
      setCurUser(data);

      //Fetching Cart Items from Server
      const fetchData = async () => {
        try {
          const cartItemsdata = await getCartItems(email);
          if (cartItemsdata.length > 0) {
            localStorage.setItem("cart", JSON.stringify(cartItemsdata));
          } else {
            //Taking Cart Items from LocalStorage to Server
            if (localStorage.getItem("cart")) {
              axios
                .post("http://localhost:5000/shop/addcartitems", {
                  email: email,
                  cartItems: JSON.parse(localStorage.getItem("cart")),
                })
                .catch((e) => {
                  console.log(e.response.data);
                });
            } else {
              localStorage.setItem("cart", JSON.stringify([]));
            }
          }
          setIsLogged(true);
        } catch (error) {}
      };

      fetchData();
    } catch (error) {
      console.log(error.response);
      setCurUser({});
    }
  };

  return (
    <div>
      <h1 className="my-4 text-xl font-bold">Login</h1>
      <div>
        <form
          className="flex flex-col items-center justify-center"
          onSubmit={handleSubmit}
        >
          <input
            type="email"
            placeholder="Email"
            className="mt-2 border border-slate-500  px-2"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            className="mt-2 border border-slate-500 px-2"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" className="mt-2 text-white bg-sky-500 p-1 ">
            Login
          </button>
        </form>
      </div>
      <div>
        <span>Don't have an Account ? </span>
        <button
          onClick={() => {
            navigate("/signup");
          }}
        >
          Signup
        </button>
      </div>
    </div>
  );
}
