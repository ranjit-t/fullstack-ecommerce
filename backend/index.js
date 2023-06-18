import express from "express";
import products from "./data/products.js";
import dotenv from "dotenv";

const app = express();

app.use(express.json());

dotenv.config();

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

app.listen(process.env.PORT, () => {
  console.log("Server is up and running on", process.env.PORT);
});
