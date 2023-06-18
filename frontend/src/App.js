import "./App.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Products from "./Pages/Products";
import Header from "./Components/Header";
import EachProduct from "./Pages/EachProduct";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header></Header>
        <Routes>
          <Route path="/" element={<Products></Products>} />
          <Route path="/products/:id" element={<EachProduct></EachProduct>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
