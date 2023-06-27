import express from "express";
import products from "./data/products.js";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";
//Routes
import userRoute from "./routes/users-route.js";
import shopRoute from "./routes/shop-route.js";
import cookieParser from "cookie-parser";

const app = express();

app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true, // Allow sending cookies from the client
  })
);
app.use(cookieParser());

dotenv.config();

mongoose
  .connect(process.env.URI)
  .then(() => {
    console.log("connected to mongodb");
  })
  .catch((err) => {
    console.log(err);
  });

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/products", (req, res) => {
  res.json(products);
});
app.get("/products/:id", (req, res) => {
  const id = req.params.id;
  const product = products.filter((product) => product._id === id);
  res.json(product);
});

app.use("/user", userRoute);
app.use("/shop", shopRoute);

app.listen(process.env.PORT, () => {
  console.log("Server is up and running on", process.env.PORT);
});
