import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "../App";
import "../styles/RouteSwitch.css";
import Shop from "../pages/Shop";
import ProductInfo from "../pages/ProductInfo";
import { useEffect, useState } from "react";
const RouteSwitch = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    console.log(cart);
  }, [cart]);

  const addToCart = (item) => {
    setCart(cart.concat(item));
  };
  return (
    <div className="RouteSwitch">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App cart={cart} />} />
          <Route path="/shop" element={<Shop cart={cart} />} />
          <Route
            path="/shop/:id"
            element={<ProductInfo cart={cart} addItem={addToCart} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default RouteSwitch;
