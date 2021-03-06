import React from 'react';

import './css/style.css';

const Game = () => {
  return (
    <div>
      <div className="box-game">
        <iframe
          src="http://slither.io/?"
          style={{
            border: '0px',
            backgroundColor: 'rgb(255, 255, 255)',
            width: '1157px',
            height: '622px',
            minHeight: ' 100%',
            margin: '50px',
            marginBottom: '190px',
          }}
        ></iframe>
      </div>
      <div className="bck-tabs">
        <div className="circle"></div>
        <div className="circle2">
          <div className="content-circle"></div>
        </div>
        <div className="circle3"></div>
        <div className="circle4">
          <div className="content-circle4"></div>
        </div>
        <div className="circle5">
          <div className="content-circle5"></div>
        </div>
      </div>
    </div>
  );
};

export default Game;
