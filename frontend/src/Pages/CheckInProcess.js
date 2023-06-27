import React, { useState } from "react";
import Shippingaddress from "../Components/Shippingaddress";
import Payment from "../Components/Payment";
import { useNavigate } from "react-router-dom";

export default function CheckInProcess({ isLogged, curUser }) {
  const [processPage, setProcessPage] = useState("shipping");
  const navigate = useNavigate();

  // console.log(curUser?.email);

  if (!curUser) {
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
      {processPage === "shipping" && (
        <Shippingaddress
          isLogged={isLogged}
          setProcessPage={setProcessPage}
        ></Shippingaddress>
      )}
      {processPage !== "shipping" && (
        <Payment isLogged={isLogged} curUser={curUser}></Payment>
      )}
    </div>
  );
}
