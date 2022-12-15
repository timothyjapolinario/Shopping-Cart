import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBreadSlice, faCoffee } from "@fortawesome/free-solid-svg-icons";
import "../styles/Header.css";
const Header = () => {
  return (
    <div className="Header">
      <h3>.Bakery</h3>
      <div id="header-options">
        <div className="header-option">
          <FontAwesomeIcon icon={faBreadSlice} />
          Breads
        </div>
        <div className="header-option">
          <FontAwesomeIcon icon={faCoffee} />
          Coffee
        </div>
      </div>
    </div>
  );
};

export default Header;
