import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
export default function Signup() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    // alert("hello");
    axios
      .post("http://localhost:5000/user/signup", { email, fullName, password })
      .then((data) => {
        console.log(data);
      })
      .catch((e) => {
        console.log(e.response.data);
      });
  };

  return (
    <div>
      <h1 className="my-4 text-xl font-bold">Signup</h1>
      <div>
        <form
          className="flex flex-col items-center justify-center"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            placeholder="Full Name"
            className="mt-2 border border-slate-500  px-2"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
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
            Signup
          </button>
        </form>
      </div>
      <div>
        <span>Already have an Account ? </span>
        <button
          onClick={() => {
            navigate("/login");
          }}
        >
          Login
        </button>{" "}
      </div>
    </div>
  );
}
