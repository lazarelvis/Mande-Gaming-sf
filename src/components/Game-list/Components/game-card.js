import React from 'react';
import gamepic from '../../../Resources/images/pig3.jpg';
// import { Link } from 'react-router-dom';

const GameCard = (props) => {
  return (
    <a href={`/game/${props.nume}`}>
      <div className="card-game">
        <img src={gamepic} />
        <button type="button">Play Game</button>
      </div>
    </a>
  );
};

export default GameCard;
