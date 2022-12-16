import "../styles/LandingPage.css";
import Header from "./Header";
import croissant from "../assets/images/breads/croissant.png";
import coffee from "../assets/images/coffee/iced-cappucino.png";
import { useState } from "react";
import { Link } from "react-router-dom";
const LandingPage = () => {
  const [quote, setQuote] = useState("Some catchy and tasty quote.");

  return (
    <div className="LandingPage">
      <Header />
      <div className="content">
        <div id="bakery-quote" data-testid="bakery-quote">
          <p>{quote}</p>
          <div id="check-shop-button">
            <Link to={"/shop"}> Check our Shop!</Link>
          </div>
        </div>
        <div id="recommended-products">
          <img id="recommended-bread" src={croissant} alt="croissant" />
          <img id="recommended-coffee" src={coffee} alt="coffee" />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
