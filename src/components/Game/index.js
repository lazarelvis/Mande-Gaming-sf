import React, { useState } from 'react';

import './css/style.css';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Unity, { UnityContext } from 'react-unity-webgl';

const unityContext = new UnityContext({
  loaderUrl: './MazeWorriorReact/Build/MazeWorriorReact.loader.js',
  dataUrl: './MazeWorriorReact/Build/MazeWorriorReact.data',
  frameworkUrl: './MazeWorriorReact/Build/MazeWorriorReact.framework.js',
  codeUrl: './MazeWorriorReact/Build/MazeWorriorReact.wasm',
});

const Game = () => {
  const [score, setScore] = useState(0);
  unityContext.on('ShowMessage', (score) => {
    setScore(score);
  });
  console.log('mesaj de la unity cu score:', score);
  return (
    <div>
      <div className="box-game">
        <div style={{ width: '1200px', height: '700px', margin: '0 auto' }}>
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
