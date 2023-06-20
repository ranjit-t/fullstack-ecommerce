import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Login({ isLogged, setIsLogged }) {
  const navigate = useNavigate();

  useEffect(() => {
    isLogged && navigate("/");
  }, [isLogged, navigate]);

  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/user/login", { email, password })
      .then((response) => {
        const { data } = response;
        console.log(data);
        localStorage.setItem("login-token", JSON.stringify(data.token));
        setIsLogged(true);
      })
      .catch((e) => {
        console.log(e.response.data);
      });
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