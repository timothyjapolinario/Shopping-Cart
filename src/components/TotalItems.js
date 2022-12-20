import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import "../styles/TotalItems.css";
const TotalItems = ({ cart, cartUI, toggleCart, removeAll, removeOne }) => {
  const computeTotal = () => {
    return cart.reduce((total, currentProduct) => {
      return total + currentProduct.product.price * currentProduct.count;
    }, 0);
  };
  if (cartUI) {
    return (
      <div className="TotalItems">
        <FontAwesomeIcon
          icon={faArrowRight}
          onClick={toggleCart}
          id="close-cart"
        />
        <div className="total-price">{"Total: $" + computeTotal()}</div>
        <div>
          {cart.map((item) => {
            return (
              <div className="items">
                <div className="item-names">
                  <div>{item.product.name}</div>
                </div>
                <div className="item-prices">
                  <div>
                    ${item.product.price} x {item.count}
                  </div>
                </div>
                <div>
                  <div className="remove-item">
                    Remove
                    <div className="remove-option-list">
                      <div
                        className="remove-option"
                        onClick={() => {
                          removeOne(item);
                        }}
                      >
                        x1
                      </div>
                      <div
                        className="remove-option"
                        onClick={() => removeAll(item)}
                      >
                        All
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
};

export default TotalItems;
