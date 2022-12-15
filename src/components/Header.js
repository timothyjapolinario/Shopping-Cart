import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBreadSlice, faCoffee } from "@fortawesome/free-solid-svg-icons";
import "../styles/Header.css";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="Header">
      <h3>.Bakery</h3>
      <div id="header-options">
        <div className="header-option">
          <Link to={"/shop/breads"} data-testid="bread-navigation">
            <FontAwesomeIcon icon={faBreadSlice} />
            Breads
          </Link>
        </div>
        <div className="header-option">
          <Link to={"/shop/coffee"} data-testid="coffee-navigation">
            <FontAwesomeIcon icon={faCoffee} />
            Coffee
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
