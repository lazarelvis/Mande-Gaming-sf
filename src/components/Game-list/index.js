import React from 'react';
import "./css/style.css";
import GameCard from './game-card';

const GameList = () => {
    return (  
        <>
        <div className="grid">
           <GameCard  nume="Play Now" />
           <GameCard nume ="Play Later"  />
           <GameCard nume ="Plaido" />
           <GameCard nume ="Elvis" />
           <GameCard nume ="Mihai" />
           <GameCard nume ="I love react" />
        </div>
        </>
    );
}
 
export default GameList;

