import React, { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import Loader from 'react-loader-spinner';
import Modal from 'react-modal';
import './css/style.css';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Unity, { UnityContext } from 'react-unity-webgl';
import isEmpty from 'lodash/isEmpty';

import { injectStyle } from 'react-toastify/dist/inject-style';
import { ToastContainer, toast } from 'react-toastify';

if (typeof window !== 'undefined') {
  injectStyle();
}

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
    setScore(score - 1);
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

  function notify(text) {
    toast(`${text}`, {
      position: 'top-center',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }

  const userNameToCreate = {
    username: localStorage.getItem('username-mande-gaming'),
    score: [
      {
        name: urlParam.id,
        score: score,
      },
    ],
  };

  let executed = false;
  if (score != 0) {
    if (
      localStorage.getItem('username-mande-gaming') != undefined &&
      scoreByUsername.length == 0
    ) {
      createScore(userNameToCreate);
      fetchScoreByUsername(localStorage.getItem('username-mande-gaming'));
    } else if (score != 0) {
      // scoreByUsername[0].score.filter((game) => {});
      if (!isEmpty(scoreByUsername)) {
        scoreByUsername[0].score.map((game) => {
          if (game.name === urlParam.id) {
            if (game.score < score) {
              if (scoreByUsername[0].score != game) {
                game.score = score;

                notify(
                  `🦄 Wow you got a new highscore ${game.name} ${score} points 🏅`
                );
                // console.log(scoreByUsername[0].score, scoreByUsername[0]._id);
                updateScoreData(scoreByUsername[0]._id, scoreByUsername[0]);
              }
              executed = true;
            } else if (game.score >= score) {
              notify(`🦄 Wow try harder maybe you can get a highscore 🔥`);
              executed = true;
            }
          }
        });
      }

      if (executed == false) {
        console.log('data de adaugat');
        const newScore = {
          name: urlParam.id,
          score: score,
        };
        let arr = scoreByUsername[0].score;
        arr.push(newScore);
        scoreByUsername[0].score = arr;
        // console.log('arr2:', scoreByUsername[0]);
        updateScoreData(scoreByUsername[0]._id, scoreByUsername[0]);
        notify(`🦄 You got a nice score for ${newScore.name} 🔥`);
      }
    }
  }

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
      {/* <button onClick={() => notify('hello world how are you')}>
        click me
      </button> */}
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
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
};

export default Game;
