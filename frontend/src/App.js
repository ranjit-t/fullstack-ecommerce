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
import CheckInProcess from "./Pages/CheckInProcess";
import Profile from "./Pages/Profile";
import EachOrder from "./Pages/EachOrder";

function App() {
  const [isLogged, setIsLogged] = useState(false);
  const [curUser, setCurUser] = useState({});
  const [cartChanged, setcartChanged] = useState(false);

  useEffect(() => {
    const checkLoginStatus = async () => {
      try {
        const response = await axios.post(
          "http://localhost:5000/user/loginverify",
          {},
          {
            withCredentials: true, // Enable sending and receiving cookies
          }
        );
        setCurUser(response.data);
        setIsLogged(true);
      } catch (error) {
        console.log(error.response.data);
        setIsLogged(false);
      }
    };

    checkLoginStatus();
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
            {/* <Route
              path="/shipping"
              element={<Shippingaddress isLogged={isLogged}></Shippingaddress>}
            ></Route> */}
            <Route
              path="/checkinprocess"
              element={
                <CheckInProcess
                  isLogged={isLogged}
                  curUser={curUser}
                ></CheckInProcess>
              }
            ></Route>
            <Route
              path="/profile"
              element={
                <Profile isLogged={isLogged} curUser={curUser}></Profile>
              }
            ></Route>
            <Route path="/order/:id" element={<EachOrder></EachOrder>} />
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
