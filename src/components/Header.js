import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import "../styles/Header.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import TotalItems from "./TotalItems";
const Header = ({ cart, removeAll, removeOne }) => {
  const [cartUI, setCartUI] = useState(false);
  const onClickCart = () => {
    setCartUI(!cartUI);
  };
  const cartItemCount = () => {
    return cart.reduce((total, item) => {
      return total + item.count;
    }, 0);
  };
  return (
    <div className="Header">
      <TotalItems
        cart={cart}
        cartUI={cartUI}
        toggleCart={onClickCart}
        removeAll={removeAll}
        removeOne={removeOne}
      />
      <h3 id="website-title">
        <Link to="/">.Bakery </Link>
      </h3>

      <div id="cart-button" onClick={onClickCart}>
        <FontAwesomeIcon icon={faShoppingCart} />
        <div id="item-count">{cartItemCount()}</div>
      </div>
    </div>
  );
};

export default Header;
