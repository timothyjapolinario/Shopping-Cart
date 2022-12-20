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
    const isNotNew = cart.find((cartItem) => {
      if (cartItem) {
        return cartItem.product.id === item.id;
      }
    });
    if (isNotNew) {
      setCart(
        cart.map((cartItem) => {
          if (cartItem.product.id === item.id) {
            return { ...cartItem, count: cartItem.count + 1 };
          }
          return cartItem;
        })
      );
    } else {
      setCart(
        cart.concat({
          product: item,
          count: 1,
        })
      );
    }
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
