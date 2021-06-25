import React, { useEffect, useState } from 'react';
import './css/style.css';
import GameCard from './game-card';
import Zoom from 'react-reveal/Zoom';
// import { connect } from 'react-redux';
// import { setUserPoint } from '../../../actions/user';
import Slide from 'react-reveal/Slide';

const GameList = ({ fetchGames, games, users }) => {
  useEffect(() => {
    fetchGames();
  }, []);
  //    console.log('games',games)
  const showGameCards = () =>
    games
      ? games.map((item, i) => {
          if (i <= 2) {
            return (
              <Slide right key={i}>
                <GameCard
                  key={item._id}
                  nume={item.name}
                  image={item.image}
                  video={item.video}
                  unity={item.isUnity}
                  puncte={item.puncte}
                />
              </Slide>
            );
          } else if (i <= 5) {
            return (
              <Slide left key={i}>
                <GameCard
                  key={item._id}
                  nume={item.name}
                  image={item.image}
                  video={item.video}
                  unity={item.isUnity}
                  puncte={item.puncte}
                />
              </Slide>
            );
          } else if (i <= 8) {
            return (
              <Slide right key={i}>
                <GameCard
                  key={item._id}
                  nume={item.name}
                  image={item.image}
                  video={item.video}
                  unity={item.isUnity}
                  puncte={item.puncte}
                />
              </Slide>
            );
          }
        })
      : null;

  return (
    <>
      <div className="grid">{showGameCards()}</div>
    </>
  );
};

export default GameList;
