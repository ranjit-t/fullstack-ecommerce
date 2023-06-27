import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Shippingaddress({ isLogged, setProcessPage }) {
  const [shippingAddress, setshippingAddress] = useState(
    localStorage.getItem("shippingAddress")
      ? JSON.parse(localStorage.getItem("shippingAddress"))
      : {}
  );
  const [address, setAddress] = useState(
    shippingAddress ? shippingAddress.address : ""
  );
  const [city, setCity] = useState(shippingAddress ? shippingAddress.city : "");
  const [postal, setPostal] = useState(
    shippingAddress ? shippingAddress.postal : ""
  );

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const upDatedAddess = {
      address,
      city,
      postal,
    };
    setshippingAddress(upDatedAddess);
    localStorage.setItem("shippingAddress", JSON.stringify(upDatedAddess));
    setProcessPage("payment");
  };

  if (!isLogged) {
    return (
      <div
        className="mt-8 cursor-pointer"
        onClick={() => {
          navigate("/login");
        }}
      >
        Please Login to Continue
      </div>
    );
  }
  return (
    <div>
      <h1 className="my-4 text-xl font-bold">Shipping Address</h1>
      <form
        className="flex flex-col items-center justify-center mt-4"
        onSubmit={handleSubmit}
      >
        <p>Address :</p>
        <input
          type="text"
          className=" border border-slate-500  px-2"
          placeholder="Address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          required
        />
        <p>City :</p>
        <input
          type="text"
          className=" border border-slate-500  px-2"
          placeholder="City"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          required
        />
        <p>Postal Code :</p>
        <input
          type="number"
          className=" border border-slate-500  px-2"
          placeholder="Postal Code "
          value={postal}
          onChange={(e) => setPostal(e.target.value)}
          required
        />
        <button
          type="submit"
          className="bg-yellow-500 px-2 text-white hover:bg-yellow-600 mt-4 font-bold"
        >
          Continue to Pay
        </button>
      </form>
    </div>
  );
}
