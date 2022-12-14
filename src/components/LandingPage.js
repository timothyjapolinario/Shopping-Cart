import "../styles/LandingPage.css";
import Header from "./Header";
import croissant from "../static/breads/croissant.png";
import coffee from "../static/coffee/iced-cappucino.png";
const LandingPage = () => {
  return (
    <div className="LandingPage">
      <Header />
      <div className="content">
        <div id="bakery-quote" data-testid="bakery-quote">
          Some catchy and tasty quote
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
