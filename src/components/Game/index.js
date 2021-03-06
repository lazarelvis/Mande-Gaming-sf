import React from 'react';

import './css/style.css';
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

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
        <div className="tabs">
        <Tabs>
        <TabList>
          <Tab>About</Tab>
          <Tab>Controls</Tab>
        </TabList>

        <TabPanel>
          <h1>Any content 1</h1>
        </TabPanel>
        <TabPanel>
          <h1>Any content 2</h1>
        </TabPanel>
      </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Game;
