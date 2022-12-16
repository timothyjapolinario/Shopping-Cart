import "../styles/Card.css";

const Card = ({ obj }) => {
  return (
    <div className="card">
      <img src={obj.imageURL} alt={obj.name} className="card-image" />
      <p>{obj.name}</p>
    </div>
  );
};
export default Card;
