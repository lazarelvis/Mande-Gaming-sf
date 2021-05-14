import React, { useEffect } from 'react';
import './css/style.css';
import GameCard from './game-card';

const GameList = ({ fetchGames, games, users }) => {
  useEffect(() => {
    fetchGames();
  }, []);
  //    console.log('games',games)
  const showGameCards = () =>
    games
      ? games.map((item, i) => (
          <GameCard
            key={item._id}
            nume={item.name}
            image={item.image}
            video={item.video}
          />
        ))
      : null;

  return (
    <>
      <div className="grid">{showGameCards()}</div>
    </>
  );
};

export default GameList;
