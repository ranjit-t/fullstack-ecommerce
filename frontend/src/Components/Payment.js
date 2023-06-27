import React, { useEffect, useState } from "react";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import axios from "axios";
// import { useNavigate } from "react-router-dom";

export default function Payment({ isLogged, curUser }) {
  const [cartItems, setCartItems] = useState([]);
  const [shippingAddress, setShippingAddress] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [paymentStatus, setPaymentStatus] = useState("");
  // const [paymentDetails, setPaymentDetails] = useState("");

  // const navigate = useNavigate();

  console.log(curUser);

  useEffect(() => {
    setShippingAddress(
      localStorage.getItem("shippingAddress")
        ? JSON.parse(localStorage.getItem("shippingAddress"))
        : []
    );
    setCartItems(
      localStorage.getItem("cart")
        ? JSON.parse(localStorage.getItem("cart"))
        : []
    );
  }, []);

  useEffect(() => {
    const price = cartItems.reduce(
      (acc, item) => acc + item.quantity * item.price,
      0
    );
    setTotalPrice(price.toFixed(2));
  }, [cartItems]);

  const handlePaymentSuccess = (details, data) => {
    // Set payment status and details
    setPaymentStatus("COMPLETED");
    // setPaymentDetails(details);

    axios
      .post("http://localhost:5000/shop/addorderitems", {
        email: curUser?.email,
        orderItems: cartItems,
        shippingAddress: shippingAddress,
        totalPrice: totalPrice,
        paymentId: details.id,
        paid: true,
        paidAt: details.update_time,
      })
      .then((response) => {
        console.log(response);
        localStorage.removeItem("cart");
        axios
          .post("http://localhost:5000/shop/deletecartitems", {
            email: curUser?.email,
          })
          .then((response) => {
            console.log(response);
            window.location.href = "/";
          });
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

  const handlePaymentError = (err) => {
    // Payment error handling
    console.error("PayPal error", err);
    setPaymentStatus("ERROR"); // Update payment status
    // setPaymentDetails(err);
  };

  return (
    <div className="pb-12">
      <h1 className="my-4 text-xl font-bold">Payment</h1>
      <div>Total Price: €{totalPrice}</div>
      <div className="flex flex-col justify-center items-center mt-8 text-center ]">
        <PayPalScriptProvider
          options={{
            "client-id":
              "AT-ZODAFMycLpeDN9-bg9smVPXostwyaqk7eZce2oCwfoC9PmzjuR14LumAJ0YDBROvf1vGecyrf0LYF",
            currency: "EUR",
            locale: "fr_FR", // Set locale to France
          }}
        >
          <PayPalButtons
            className="min-w-[300px]"
            createOrder={(data, actions) => {
              return actions.order.create({
                purchase_units: [
                  {
                    amount: {
                      value: totalPrice,
                    },
                  },
                ],
              });
            }}
            onApprove={(data, actions) => {
              return actions.order.capture().then((details) => {
                handlePaymentSuccess(details, data);
              });
            }}
            onError={handlePaymentError}
          />
        </PayPalScriptProvider>
      </div>

      {paymentStatus === "COMPLETED" && (
        <div>
          {/* <h2>Payment Status: {paymentStatus}</h2>
          <pre>{JSON.stringify(paymentDetails, null, 2)}</pre> */}
          <p>Congratulations! Your order has been placed successfully</p>
          <p>Thank you for your trust in KARMAPP</p>
        </div>
      )}
    </div>
  );
}
