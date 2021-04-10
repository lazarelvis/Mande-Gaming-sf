import React from 'react';
import gamepic from '../../../Resources/images/pig3.jpg';
import gamepic2 from '../../../Resources/images/imgMazeWorrior.png';

// import { Link } from 'react-router-dom';

const GameCard = (props) => {
  return (
    <a href={`/game/${props.nume}`}>
      <div className="card-game">
        <img
          src={`/CardGamesImages/${props.image ? props.image : 'default.jpg'}`}
          alt={`${props.name}`}
        />
        <button type="button">Play Game</button>
      </div>
    </a>
  );
};

export default GameCard;
