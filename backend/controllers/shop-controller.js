import express from "express";

const router = express.Router();
router.use(express.json());

import NewUser from "../models/users-model.js";

const getCartController = async (req, res) => {
  const { email } = req.body;
  // console.log(req.body);
  if (!email) {
    return res.status(404).json({ error: "No email Found" });
  }

  try {
    const foundItems = await NewUser.find({ email });
    return res.status(200).json({ cartItems: foundItems[0].cartItems });
  } catch (error) {
    console.error("Error replacing cart items:", error);
    return res.status(500).json({ error: "An error occurred" });
  }
};

const cartController = async (req, res) => {
  const { email, cartItems } = req.body;
  // console.log(email, cartItems);

  try {
    const updatedUser = await NewUser.findOneAndUpdate(
      { email },
      { $set: { cartItems } },
      { new: true }
    );

    if (updatedUser) {
      //   console.log(updatedUser);
      return res.send("Cart items replaced successfully");
    } else {
      return res.status(404).json({ error: "User not found" });
    }
  } catch (error) {
    console.error("Error replacing cart items:", error);
    return res.status(500).json({ error: "An error occurred" });
  }
};

const deleteCartController = async (req, res) => {
  const { email } = req.body;
  // console.log(email);

  try {
    const updatedUser = await NewUser.findOneAndUpdate(
      { email },
      { $set: { cartItems: [] } },
      { new: true }
    );

    if (updatedUser) {
      //   console.log(updatedUser);
      return res.send("Cart items Deleted successfully");
    } else {
      return res.status(404).json({ error: "User not found" });
    }
  } catch (error) {
    console.error("Error replacing cart items:", error);
    return res.status(500).json({ error: "An error occurred" });
  }
};

const addOrderController = async (req, res) => {
  const {
    email,
    orderItems,
    shippingAddress,
    totalPrice,
    paymentId,
    paid,
    paidAt,
  } = req.body;

  try {
    const updatedUser = await NewUser.findOneAndUpdate(
      { email },
      {
        $push: {
          orders: {
            orderID: Date.now().toString() + email,
            orderItems: orderItems,
            shippingAddress,
            totalPrice,
            paymentId,
            paid,
            paidAt,
            delivered: false,
            deliveredAt: "",
          },
        },
      },
      { new: true }
    );

    if (updatedUser) {
      return res.send("Order items added successfully");
    } else {
      return res.status(404).json({ error: "User not found" });
    }
  } catch (error) {
    console.error("Error adding order items:", error);
    return res.status(500).json({ error: "An error occurred" });
  }
};

const getOrderController = async (req, res) => {
  const { email } = req.body;
  console.log(email);
  if (!email) {
    return res.status(404).json({ error: "No email Found" });
  }
  console.log(email);
  try {
    const foundItems = await NewUser.find({ email });
    return res.status(200).json({ orders: foundItems[0].orders });
  } catch (error) {
    console.error("Error replacing cart items:", error);
    return res.status(500).json({ error: "An error occurred" });
  }
};

export {
  cartController,
  deleteCartController,
  getCartController,
  addOrderController,
  getOrderController,
};
