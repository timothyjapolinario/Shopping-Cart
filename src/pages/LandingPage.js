import "../styles/LandingPage.css";
import Header from "../components/Header";
import croissant from "../assets/images/breads/croissant.png";
import coffee from "../assets/images/coffee/iced-cappucino.png";
import { useState } from "react";
import { Link } from "react-router-dom";
const LandingPage = () => {
  const [quote, setQuote] = useState("Some catchy and tasty quote.");
  return (
    <div className="LandingPage">
      <div className="content">
        <div id="quote-button-wrapper" data-testid="bakery-quote">
          <p id="bakery-quote">{quote}</p>
          <div id="check-shop-button">
            <Link to={"/shop"} data-testid="shop-navigation">
              Check our Shop!
            </Link>
          </div>
        </div>
        <div id="recommended-products">
          <div className="rel-wrapper">
            <img id="recommended-coffee" src={coffee} alt="coffee" />
            <img id="recommended-bread" src={croissant} alt="croissant" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
