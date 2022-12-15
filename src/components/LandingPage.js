import "../styles/LandingPage.css";
import Header from "./Header";
import croissant from "../static/breads/croissant.png";
import coffee from "../static/coffee/iced-cappucino.png";
import { useState } from "react";
const LandingPage = () => {
  const [quote, setQuote] = useState("Some catchy and tasty quote.");

  return (
    <div className="LandingPage">
      <Header />
      <div className="content">
        <div id="bakery-quote" data-testid="bakery-quote">
          <p>{quote}</p>
          <div id="check-shop-button">Check our Shop!</div>
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
