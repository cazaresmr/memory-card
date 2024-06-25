import "../Card.css";

const Card = ({ value, flipped, matched, onClick }) => {
  return (
    <div
      className={`card ${flipped || matched ? "flipped" : ""}`}
      onClick={onClick}
    >
      {flipped || matched ? value : "?"}
    </div>
  );
};

export default Card;
