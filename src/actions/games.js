import * as t from '../actionTypes';
import gamesServiceApi from '../services/games';

//get game
function receiveGames(json) {
  return {
    type: t.GET_GAMES_SUCCESS,
    data: json,
  };
}

function receiveGamesError(error) {
  return {
    type: t.GET_GAMES_FAILURE,
    error,
  };
}

export const fetchAllGames = () => (dispatch, getState) => {
  return gamesServiceApi
    .fetchAll()
    .then((json) => {
      dispatch(receiveGames(json));
    })
    .catch((error) => {
      dispatch(receiveGamesError(error));
    });
};

//get game by id
function receiveGameById(json) {
  return {
    type: t.GET_GAME_BY_ID_SUCCESS,
    data: json,
  };
}

function receiveGameByIdError(error) {
  return {
    type: t.GET_GAME_BY_ID_FAILURE,
    error,
  };
}

export const fetchGameById = (params) => (dispatch, getState) => {
  return gamesServiceApi
    .find(`name=${params}`)
    .then((json) => {
      dispatch(receiveGameById(json));
    })
    .catch((error) => {
      dispatch(receiveGameByIdError(error));
    });
};
