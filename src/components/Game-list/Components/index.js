import React, {useEffect} from 'react';
import "./css/style.css";
import GameCard from './game-card';

const GameList = ({fetchGames, games}) => {

    useEffect(() => {
        fetchGames();
   }, [])
   console.log('games',games)

   const showGameCards = ()=>(
       games ? games.map((item, i)=>(
        <GameCard key={item._id}  nume={item.name} />
       ))
       :null
   ) 

    return (  
        <>
        <div className="grid">
           {/* <GameCard  nume="Play Now" />
           <GameCard nume ="Play Later"  />
           <GameCard nume ="Plaido" />
           <GameCard nume ="Elvis" />
           <GameCard nume ="Mihai" />
           <GameCard nume ="I love react" /> */}
           {showGameCards()}
        </div>
        </>
    );
}
 
export default GameList;

