import React, { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import Loader from 'react-loader-spinner';
import Modal from 'react-modal';

import './css/style.css';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Unity, { UnityContext } from 'react-unity-webgl';
import isEmpty from 'lodash/isEmpty';

const Game = ({
  fetchGameById,
  gameById,
  scoreByUsername,
  fetchScoreByUsername,
  createScore,
  updateScoreData,
}) => {
  let UsernameGenerator = require('username-generator');
  let username = UsernameGenerator.generateUsername(' ');

  const [user, setUser] = useState();

  let urlParam = useParams();
  const [score, setScore] = useState(0);
  const [modalIsOpen, setIsOpen] = useState(true);
  const [gameData, setGameData] = useState(0);
  const newData = { score: 0, username: '' };
  // { if (localStorage.getItem('username-mande-gaming') != undefined) {
  //   useState(true  )
  // } else {
  // }}

  useEffect(() => {
    if (localStorage.getItem('username-mande-gaming') != undefined) {
      setIsOpen(false);
    }
    fetchScoreByUsername(localStorage.getItem('username-mande-gaming'));
  }, []);

  // console.log('scoreByUsername', scoreByUsername);
  useEffect(() => {
    // Update the document title using the browser API
    if (score != 0) {
      setGameData(score);
    }
  }, []);

  newData.score = gameData;
  newData.username = localStorage.getItem('username-mande-gaming');

  // console.log('newData: ', newData);
  // console.log('gameData: ', gameData);

  const generateUserNmae = () => {
    setUser(username);
    localStorage.setItem('username-mande-gaming', username);
    closeModal();
  };

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

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

  // console.log('gameById', gameById);

  const unityContext = new UnityContext({
    loaderUrl: `../${gameById[0].link}/Build/${gameById[0].link}.loader.js`,
    dataUrl: `../${gameById[0].link}/Build/${gameById[0].link}.data`,
    frameworkUrl: `../${gameById[0].link}/Build/${gameById[0].link}.framework.js`,
    codeUrl: `../${gameById[0].link}/Build/${gameById[0].link}.wasm`,
  });
  unityContext.on('ShowMessage', (score) => {
    setScore(score);
  });

  // if (score != 0) {
  //   const objData = {};
  //   objData = {
  //     username: username,
  //     score: score,
  //   };
  //   console.log(objData);
  // }
  // console.log('data arr', gameById[0].tabs);

  const userNameToCreate = {
    username: localStorage.getItem('username-mande-gaming'),
    score: [
      {
        name: urlParam.id,
        score: score,
      },
    ],
  };

  if (score != 0) {
    if (localStorage.getItem('username-mande-gaming') == undefined) {
      createScore(userNameToCreate);
    } else if (score != 0) {
      const newScore = {
        name: urlParam.id,
        score: score,
      };
      let arr = scoreByUsername[0].score;
      arr.push(newScore);
      scoreByUsername[0].score = arr;
      console.log('arr2:', scoreByUsername[0]);
      updateScoreData(scoreByUsername[0]._id, scoreByUsername[0]);
    }
  }
  // const newScore = {
  //   name: 'un joc',
  //   score: 1111,
  // };
  // let arr = scoreByUsername[0].score;
  // arr.push(newScore);

  // let arr = scoreByUsername[0].score ? scoreByUsername[0].score : null;

  // const gammers = arr.filter((game) => game.name === 'Awesome Zombie Crasher');
  // console.log('gammers: ', gammers);

  const tabsData = () => (
    <Tabs>
      <TabList>
        <Tab>About</Tab>
        <Tab>Controls</Tab>
      </TabList>

      <TabPanel>
        <h1>{isEmpty(gameById[0].name)}</h1>
        <h3 className="tabs-description">{gameById[0].tabs[0].description}</h3>
      </TabPanel>
      <TabPanel>
        <h3 className="tabs-description">{gameById[0].tabs[1].description}</h3>
      </TabPanel>
    </Tabs>
  );
  // console.log('username game: ', localStorage.getItem('username-mande-gaming'));
  return (
    <div>
      <div>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          ariaHideApp={false}
          contentLabel="Example Modal"
        >
          <h1>Hold up !</h1>
          <h2>If you wanna play any game on this platform</h2>
          <h2>you need to log in first</h2>
          <button onClick={generateUserNmae}>Play as Guest</button>
          <button style={{ marginTop: '20px', width: '20%' }}>Log in</button>
        </Modal>
      </div>
      <h1 style={{ color: '#fff' }}>
        {localStorage.getItem('username-mande-gaming')}
      </h1>
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
