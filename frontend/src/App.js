import "./App.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Products from "./Pages/Products";
import Header from "./Components/Header";
import EachProduct from "./Pages/EachProduct";
import { Provider } from "react-redux";
import store from "./Store/Store.js";
import Cart from "./Pages/Cart";
import Footer from "./Components/Footer";

import { useEffect, useState } from "react";
import axios from "axios";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";

function App() {
  // const [loading, setLoading] = useState(true);
  const [isLogged, setIsLogged] = useState(false);
  const [curUser, setCurUser] = useState({});
  const [cartChanged, setcartChanged] = useState(false);

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("login-token"));
    if (token) {
      axios
        .post("http://localhost:5000/user/loginverify", {
          token,
        })
        .then((response) => {
          // console.log(data);
          setCurUser(response.data);
          setIsLogged(true);
          // setLoading(false);
        })
        .catch((e) => {
          console.log(e.response.data);
          setIsLogged(false);
          // setLoading(false);
        });
    } else {
      setIsLogged(false);
      // setLoading(false);
    }
  }, []);

  return (
    <div className="App relative min-h-screen">
      <BrowserRouter>
        <Header
          isLogged={isLogged}
          setIsLogged={setIsLogged}
          curUser={curUser}
          cartChanged={cartChanged}
        ></Header>
        <Provider store={store}>
          <Routes>
            <Route
              path="/"
              element={
                <Products
                  curUser={curUser}
                  setcartChanged={setcartChanged}
                ></Products>
              }
            />
            <Route
              path="/products/:id"
              element={
                <EachProduct
                  curUser={curUser}
                  setcartChanged={setcartChanged}
                ></EachProduct>
              }
            />
            <Route
              path="/cart"
              element={
                <Cart
                  curUser={curUser}
                  cartChanged={cartChanged}
                  setcartChanged={setcartChanged}
                ></Cart>
              }
            />
            <Route
              path="/login"
              element={
                <Login
                  isLogged={isLogged}
                  setIsLogged={setIsLogged}
                  curUser={curUser}
                  setCurUser={setCurUser}
                ></Login>
              }
            ></Route>
            <Route path="/signup" element={<Signup></Signup>}></Route>
          </Routes>
        </Provider>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
