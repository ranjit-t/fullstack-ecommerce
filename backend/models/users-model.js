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
      image: { type: String },
    },
  ],
  orders: [
    {
      orderID: { type: String },
      orderItems: [
        {
          _id: { type: String },
          name: { type: String },
          price: { type: String },
          quantity: { type: Number },
          image: { type: String },
        },
      ],
      shippingAddress: {
        address: { type: String },
        city: { type: String },
        postal: { type: String },
      },
      totalPrice: { type: String },
      paymentId: { type: String },
      paid: { type: Boolean },
      paidAt: { type: Date, default: Date.now },
      delivered: { type: Boolean },
      deliveredAt: { type: Date },
    },
  ],
});

const NewUser = mongoose.model("allUsers", newUserSchema);

export default NewUser;
