import "../styles/Card.css";

const Card = ({ obj }) => {
  return (
    <div className="card">
      <img src={obj.imageURL} alt={obj.name} className="card-image" />
      <h3>{obj.name}</h3>
    </div>
  );
};
export default Card;
