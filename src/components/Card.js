import { Link } from "react-router-dom";
import "../styles/Card.css";

const Card = ({ obj }) => {
  return (
    <Link to={`/shop/${obj.id}`}>
      <div className="Card">
        <img src={obj.imageURL} alt={obj.name} className="card-image" />
        <h3>{obj.name}</h3>
      </div>
    </Link>
  );
};
export default Card;
