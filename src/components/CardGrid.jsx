import Card from "./Card";
import "../CardGrid.css";

const CardGrid = ({ cards, onCardClick }) => {
  return (
    <div className='card-grid'>
      {cards.map((card, index) => (
        <Card
          key={index}
          value={card.value}
          flipped={card.flipped}
          matched={card.matched}
          onClick={() => onCardClick(index)}
        />
      ))}
    </div>
  );
};

export default CardGrid;
