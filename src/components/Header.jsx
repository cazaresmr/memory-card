import PropTypes from "prop-types";
import "../Header.css";

const Header = ({ currentScore, bestScore }) => {
  return (
    <header className='header'>
      <h1>Memory Game</h1>
      <div className='scoreboard'>
        <p>Current Score: {currentScore}</p>
        <p>Best Score: {bestScore}</p>
      </div>
    </header>
  );
};

Header.propTypes = {
  currentScore: PropTypes.number.isRequired,
  bestScore: PropTypes.number.isRequired,
};

export default Header;
