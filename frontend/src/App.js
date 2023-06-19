import "./App.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Products from "./Pages/Products";
import Header from "./Components/Header";
import EachProduct from "./Pages/EachProduct";
import { Provider } from "react-redux";
import store from "./ReduxStore/Store.js";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header></Header>
        <Provider store={store}>
          <Routes>
            <Route path="/" element={<Products></Products>} />
            <Route path="/products/:id" element={<EachProduct></EachProduct>} />
          </Routes>
        </Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
