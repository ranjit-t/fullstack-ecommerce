import mongoose from "mongoose";

const newUserSchema = mongoose.Schema({
  email: { type: String, unique: true },
  fullName: String,
  password: String,
  cartItems: [
    {
      _id: { type: String },
      name: { type: String },
      price: { type: String },
      quantity: { type: Number },
    },
  ],
  orderedItems: [
    {
      _id: { type: String },
      cartItems: [
        {
          _id: { type: String },
          name: { type: String },
          price: { type: String },
          quantity: { type: Number },
        },
      ],
      orderId: { type: String },
      totalPrice: { type: String },
      orderedAt: { type: Date, default: Date.now },
      paid: { type: Boolean },
      delivered: { type: Boolean },
      deliveredAt: { type: Date },
    },
  ],
});

const NewUser = mongoose.model("allUsers", newUserSchema);

export default NewUser;
