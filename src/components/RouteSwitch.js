import { BrowserRouter, Routes, Route, HashRouter } from "react-router-dom";

import "../styles/RouteSwitch.css";
import Shop from "../pages/Shop";
import ProductInfo from "../pages/ProductInfo";
import { useEffect, useState } from "react";
import Header from "./Header";
import LandingPage from "../pages/LandingPage";
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

  const removeAllFromCart = (item) => {
    const newCart = cart.filter((cartItem) => {
      console.log(item);
      return cartItem.product.id !== item.product.id;
    });
    setCart([...newCart]);
  };

  const removeOneFromCart = (item) => {
    if (item.count !== 1) {
      const newCart = cart.map((cartItem) => {
        if (cartItem.product.id === item.product.id) {
          return { ...cartItem, count: cartItem.count - 1 };
        }
        return cartItem;
      });
      setCart([...newCart]);
    } else {
      removeAllFromCart(item);
    }
  };
  return (
    <div className="RouteSwitch">
      <HashRouter>
        <Header
          cart={cart}
          removeAll={removeAllFromCart}
          removeOne={removeOneFromCart}
        />
        <Routes>
          <Route path="/" element={<LandingPage cart={cart} />} />
          <Route path="/shop" element={<Shop cart={cart} />} />
          <Route
            path="/shop/:id"
            element={<ProductInfo cart={cart} addItem={addToCart} />}
          />
        </Routes>
      </HashRouter>
    </div>
  );
};

export default RouteSwitch;
