import React from 'react';
import gamepic from '../../../Resources/images/pig3.jpg';

const GameCard = (props) => {
    return ( 
    <div className="card-game">
        <img src={gamepic} />
        <button type="button">{props.nume}</button>
    </div>
     );
}
 
export default GameCard;
