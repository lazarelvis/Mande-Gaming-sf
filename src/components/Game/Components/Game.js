import React, { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import Loader from 'react-loader-spinner';

import './css/style.css';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Unity, { UnityContext } from 'react-unity-webgl';
import isEmpty from 'lodash/isEmpty';

const Game = ({ fetchGameById, gameById }) => {
  let urlParam = useParams();
  const [score, setScore] = useState(0);

  useEffect(() => {
    fetchGameById(urlParam.id);
  }, []);

  if (isEmpty(gameById)) {
    return (
      <Loader
        className="loader-page"
        type="ThreeDots"
        color="#fff"
        height={80}
        width={80}
      />
    );
  }

  console.log('gameById', gameById);
  console.log('score', score);

  const unityContext = new UnityContext({
    loaderUrl: `../${gameById[0].link}/Build/${gameById[0].link}.loader.js`,
    dataUrl: `../${gameById[0].link}/Build/${gameById[0].link}.data`,
    frameworkUrl: `../${gameById[0].link}/Build/${gameById[0].link}.framework.js`,
    codeUrl: `../${gameById[0].link}/Build/${gameById[0].link}.wasm`,
  });
  unityContext.on('ShowMessage', (score) => {
    setScore(score);
  });
  console.log('data arr', gameById[0].tabs);
  const tabsData = () => (
    <Tabs>
      <TabList>
        <Tab>About</Tab>
        <Tab>Controls</Tab>
      </TabList>

      <TabPanel>
        <h1>{gameById[0].name}</h1>
        <h3 className="tabs-description">{gameById[0].tabs[0].description}</h3>
      </TabPanel>
      <TabPanel>
        <h3 className="tabs-description">{gameById[0].tabs[1].description}</h3>
      </TabPanel>
    </Tabs>
  );

  return (
    <div>
      <div className="box-game">
        <div style={{ width: '1200px', height: '800px', margin: '0 auto' }}>
          <Unity unityContext={unityContext} />
        </div>
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
        <div className="tabs">{tabsData()}</div>
      </div>
    </div>
  );
};

export default Game;
