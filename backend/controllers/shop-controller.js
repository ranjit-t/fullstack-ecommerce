import express from "express";

const router = express.Router();
router.use(express.json());

import NewUser from "../models/users-model.js";

const cartController = async (req, res) => {
  const { email, cartItems } = req.body;
  console.log(email, cartItems);

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

const getCartController = async (req, res) => {
  const { email } = req.body;
  console.log(req.body);
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

export { cartController, getCartController };
