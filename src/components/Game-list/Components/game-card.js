import React, { useState, useEffect } from "react";
import gamepic from "../../../Resources/images/pig3.jpg";
import gamepic2 from "../../../Resources/images/imgMazeWorrior.png";
import { useSelector } from "react-redux";
import Modal from "react-modal";
import { connect } from "react-redux";
import { setUserPoint, fetchAllUsers } from "../../../actions/user";
import isEmpty from "lodash/isEmpty";
// import { Link } from 'react-router-dom';

const GameCard = (props, { updateuserpointgame, Getallusers }) => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const auth = useSelector((state) => state.auth);

  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }
  const Jocuri = [];
  let i;
  const UserPoits = auth
    ? auth.user
      ? auth.user.puncte
        ? auth.user.puncte
        : "0"
      : "0"
    : "0";
  const UserId = auth
    ? auth.user
      ? auth.user._id
        ? auth.user._id
        : "0"
      : "0"
    : "0";
  const UnlockGame = (NewPoint, name) => {
    if (NewPoint < 0) {
      alert("Sorry but you do not have enght points to unlock " + name);
    } else {
      Jocuri.push(
        auth
          ? auth.user
            ? auth.user.onlineGames[i]
              ? auth.user.onlineGames[i]
              : null
            : null
          : null
      );
      const newList = Jocuri.filter((x) => x !== null);
      newList.push(name);
      let arr = auth.user.onlineGames;
      const AddOnlineGameData = {
        puncte: NewPoint,
        onlineGames: newList,
      };
      let arr1 = auth.user.puncte;
      arr1 = NewPoint;
      auth.user.puncte = arr1;
      console.log("asdasdasd", arr1);
      arr.push(name);
      props.updateuserpointgame(UserId, AddOnlineGameData);
      closeModal();
    }
  };

  const ShowLock = (nume, isunity) => {
    for (i = 0; i < 5; i++) {
      Jocuri.push(
        auth
          ? auth.user
            ? auth.user.onlineGames[i]
              ? auth.user.onlineGames[i]
              : null
            : null
          : null
      );
    }

    const newList = Jocuri.filter((x) => x !== null);
    if (auth === null && isunity === false) {
      return (
        <>
          <div className="lock">
            <img src={`/CardGamesImages/LOCK1.png`} />
          </div>
          <button onClick={openModal} type="button">
            Unlock Game
          </button>
        </>
      );
    } else if (isunity === true) {
      return (
        <>
          <a href={`/game/${nume}`}>
            <button type="button">Play Game</button>
          </a>
        </>
      );
    } else if (auth !== null) {
      let newArr = auth.user;
      if (isEmpty(auth)) {
        return <h1>Loading...</h1>;
      }
      for (i = 0; i < 4; i++) {
        if (nume === auth.user.onlineGames[i] && isunity === false) {
          return (
            <>
              <a href={`/game/${nume}`}>
                <button type="button">Play Game</button>
              </a>
            </>
          );
        }
      }
      if (nume !== auth.user.onlineGames[i] && isunity === false) {
        return (
          <>
            <div className="lock">
              <img src={`/CardGamesImages/LOCK1.png`} />
            </div>
            <button onClick={openModal} type="button">
              Unlock Game
            </button>
          </>
        );
      }
      if (isunity === true) {
        return (
          <>
            <a href={`/game/${nume}`}>
              <button type="button">Play Game</button>
            </a>
          </>
        );
      }
    }
  };

  return (
    <div className="card-game">
      {ShowLock(props.nume, props.unity)}
      <img
        src={`/CardGamesImages/${props.image ? props.image : "default.jpg"}`}
        alt={`${props.name}`}
      />
      <video
        src={`/CardGamesImages/${props.video ? props.video : "noVideo.mp4"}`}
        type="video/mp4"
        loop
        autoPlay
        muted
      ></video>
      <div>
        <Modal
          isOpen={modalIsOpen}
          ariaHideApp={false}
          onRequestClose={closeModal}
          contentLabel="Unlock Game"
        >
          <div className="unlockGameModal">
            <h1>Hold up !</h1>
            <h2>In order to play {props.nume} you need to unlock-it first !</h2>
            <h2>The game require {props.puncte} points.</h2>
            <h2>
              Now you have{" "}
              {auth
                ? auth.user
                  ? auth.user.puncte
                    ? auth.user.puncte
                    : "0"
                  : "0"
                : "0"}{" "}
              points
            </h2>
            <h2>
              If you unlock this game you will have {UserPoits - props.puncte}{" "}
              points.
            </h2>
            <button
              onClick={() => UnlockGame(UserPoits - props.puncte, props.nume)}
            >
              Unlock
            </button>
            <button onClick={closeModal}>Exit</button>
          </div>
        </Modal>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    updatePointsUser: state.updatePointsUser,
  };
};

const mapDispatchToProps = (dispatch) => ({
  Getallusers: () => {
    dispatch(fetchAllUsers());
  },
  updateuserpointgame: (id, data) => {
    dispatch(setUserPoint(id, data));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(GameCard);
