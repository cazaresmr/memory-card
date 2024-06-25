import { useState, useEffect } from "react";
import Header from "./components/Header";
import CardGrid from "./components/CardGrid";
import "./App.css";

const App = () => {
  const [currentScore, setCurrentScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [cards, setCards] = useState([
    { value: 1, flipped: false, matched: false },
    { value: 2, flipped: false, matched: false },
    { value: 3, flipped: false, matched: false },
    { value: 4, flipped: false, matched: false },
    { value: 5, flipped: false, matched: false },
    { value: 6, flipped: false, matched: false },
    { value: 7, flipped: false, matched: false },
    { value: 8, flipped: false, matched: false },
    { value: 1, flipped: false, matched: false },
    { value: 2, flipped: false, matched: false },
    { value: 3, flipped: false, matched: false },
    { value: 4, flipped: false, matched: false },
    { value: 5, flipped: false, matched: false },
    { value: 6, flipped: false, matched: false },
    { value: 7, flipped: false, matched: false },
    { value: 8, flipped: false, matched: false },
  ]);

  const shuffleCards = () => {
    setCards((prevCards) => [...prevCards].sort(() => Math.random() - 0.5));
  };

  useEffect(() => {
    shuffleCards();
  }, []); // Initial shuffle on mount

  const [flippedCards, setFlippedCards] = useState([]);

  const handleCardClick = (index) => {
    if (flippedCards.length === 2) return;

    const newCards = [...cards];
    newCards[index].flipped = true;
    setCards(newCards);

    const newFlippedCards = [...flippedCards, index];
    setFlippedCards(newFlippedCards);

    if (newFlippedCards.length === 2) {
      const [firstIndex, secondIndex] = newFlippedCards;
      if (newCards[firstIndex].value === newCards[secondIndex].value) {
        newCards[firstIndex].matched = true;
        newCards[secondIndex].matched = true;
        setCards(newCards);
        setFlippedCards([]);
        setCurrentScore((prevScore) => {
          const newScore = prevScore + 1;
          if (newScore > bestScore) {
            setBestScore(newScore);
          }
          return newScore;
        });
      } else {
        setTimeout(() => {
          newCards[firstIndex].flipped = false;
          newCards[secondIndex].flipped = false;
          setCards(newCards);
          setFlippedCards([]);
        }, 1000);
      }
    }
  };

  return (
    <div className='App'>
      <Header currentScore={currentScore} bestScore={bestScore} />
      <CardGrid cards={cards} onCardClick={handleCardClick} />
    </div>
  );
};

export default App;
