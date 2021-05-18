import * as t from './actionTypes';

const initialState = {
  users: [],
  getUsersSuccess: false,
  usersFailure: null,
  getUsersFailure: false,

  games: [],
  getGamesSuccess: false,
  getGamesFailure: false,
  gamesFailure: null,

  gameById: [],
  getGameByIdSuccess: false,
  getGameByIdFailure: false,
  gameByIdFailure: null,

  scoreByUsername: [],
  getScoreByUsernameSuccess: false,
  getScoreByUsernameFailure: false,
  scoreByUsernameFailure: null,

  createScore: [],
  createScoreSuccess: false,
  createScoreFailure: false,
  scoreFailure: null,

  updateScore: [],
  updateScoreSuccess: false,
  updateScoreFailure: false,
  setUpdateScore: null,
};
// eslint-disable-next-line
export default (state = initialState, action) => {
  switch (action.type) {
    case t.UPDATE_SCORE_SUCCESS:
      return Object.assign({}, state, {
        updateScore: action.data,
        updateScoreSuccess: true,
        updateScoreFailure: false,
      });
    case t.UPDATE_SCORE_FAILURE:
      return Object.assign({}, state, {
        updateScore: null,
        updateScoreSuccess: false,
        updateScoreFailure: true,
        setUpdateScore: action.data,
      });
    case t.GET_USERS_SUCCESS:
      return Object.assign({}, state, {
        users: action.data,
        getUsersSuccess: true,
        getUsersFailure: false,
      });
    case t.GET_USERS_FAILURE:
      return Object.assign({}, state, {
        users: null,
        getUsersSuccess: false,
        getUsersFailure: true,
        usersFailure: action.data,
      });

    case t.GET_GAMES_SUCCESS:
      return Object.assign({}, state, {
        games: action.data,
        getGamesSuccess: true,
        getGamesFailure: false,
      });
    case t.GET_GAMES_FAILURE:
      return Object.assign({}, state, {
        games: null,
        getGamesSuccess: false,
        getGamesFailure: true,
        gamesFailure: action.data,
      });
    case t.GET_GAME_BY_ID_SUCCESS:
      return Object.assign({}, state, {
        gameById: action.data,
        getGameByIdSuccess: true,
        getGameByIdFailure: false,
      });
    case t.GET_GAMES_FAILURE:
      return Object.assign({}, state, {
        gameById: null,
        getGameByIdSuccess: false,
        getGameByIdFailure: true,
        gameByIdFailure: action.data,
      });
    case t.GET_SCORE_BY_USERNAME_SUCCESS:
      return Object.assign({}, state, {
        scoreByUsername: action.data,
        getScoreByUsernameSuccess: true,
        getScoreByUsernameFailure: false,
      });
    case t.GET_SCORE_BY_USERNAME_FAILURE:
      return Object.assign({}, state, {
        scoreByUsername: null,
        getScoreByUsernameSuccess: false,
        getScoreByUsernameFailure: true,
        scoreByUsernameFailure: action.data,
      });

    case t.CREATE_SCORE_SUCCESS:
      return Object.assign({}, state, {
        createScore: action.data,
        createScoreSuccess: true,
        createScoreFailure: false,
      });
    case t.CREATE_SCORE_FAILURE:
      return Object.assign({}, state, {
        createScore: null,
        createScoreSuccess: false,
        createScoreFailure: true,
        scoreFailure: action.data,
      });
    default:
      return state;
  }
};
