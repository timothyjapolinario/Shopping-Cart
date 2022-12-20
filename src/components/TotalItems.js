import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import "../styles/TotalItems.css";
const TotalItems = ({ cart, cartUI, toggleCart }) => {
  const computeTotal = () => {
    return cart.reduce((total, currentProduct) => {
      return total + currentProduct.product.price * currentProduct.count;
    }, 0);
  };
  if (cartUI) {
    return (
      <div className="TotalItems">
        <FontAwesomeIcon icon={faArrowRight} onClick={toggleCart} />
        <div>{"Total: $" + computeTotal()}</div>
        <div className="items">
          <div className="item-names">
            {cart.map((item) => {
              return <div>{item.product.name}</div>;
            })}
          </div>
          <div className="item-prices">
            {cart.map((item) => {
              return (
                <div>
                  {item.product.price} x {item.count}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
};

export default TotalItems;
