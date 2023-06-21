import axios from "axios";

export const getAllProducts = async () => {
  let products = [];
  try {
    const result = await axios.get("http://localhost:5000/products");

    products = result.data;
  } catch (e) {
    products = [];
  }

  return products;
};
