import "./App.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Products from "./Pages/Products";
import Header from "./Components/Header";
import EachProduct from "./Pages/EachProduct";
import { Provider } from "react-redux";
import store from "./Store/Store.js";
import Cart from "./Pages/Cart";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App relative min-h-screen">
      <BrowserRouter>
        <Header></Header>
        <Provider store={store}>
          <Routes>
            <Route path="/" element={<Products></Products>} />
            <Route path="/products/:id" element={<EachProduct></EachProduct>} />
            <Route path="/cart" element={<Cart></Cart>} />
          </Routes>
        </Provider>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
