import axios from "axios";

const getCartItems = (email) => {
  try {
    const fetchData = async () => {
      const result = await axios.post(
        "http://localhost:5000/shop/getcartitems",
        {
          email: email,
        }
      );
      return result.data.cartItems;
    };

    return fetchData();
  } catch (e) {
    // console.log(e);
  }
};

export default getCartItems;
