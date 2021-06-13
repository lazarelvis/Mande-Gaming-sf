import * as t from './actionTypes';

const initialState = {
  users: [],
  getUsersSuccess: false,
  usersFailure: null,
  getUsersFailure: false,

  authentication: [],
  setAuthenticationSuccess: false,
  authenticationFailure: null,
  setAuthenticationFailure: false,

  auth: [],
  getAuthSuccess: false,
  authFailure: null,
  getAuthFailure: false,

  createUser: [],
  createUserSuccess: false,
  createUserFailure: false,
  setUserFailure: null,

  games: [],
  getGamesSuccess: false,
  getGamesFailure: false,
  gamesFailure: null,

  score: [],
  getScoreSuccess: false,
  getScoreFailure: false,
  scoreFailure: null,

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

  logOut: [],
  logOutSuccess: false,
  logOutFailure: false,
  setLogOutFailure: null,

  updatePointsUser: [],
  updatePointsUserSuccess: false,
  updatePointsUserFailure: false,
  setupdatePointsUser: null,
};
// eslint-disable-next-line
export default (state = initialState, action) => {
  switch (action.type) {
    case t.SET_AUTH_LOG_OUT_SUCCESS:
      return Object.assign({}, state, {
        auth: null,
        logOutSuccess: true,
        logOutFailure: false,
      });
    case t.SET_AUTH_LOG_OUT_FAILURE:
      return Object.assign({}, state, {
        logOut: null,
        logOutSuccess: false,
        logOutFailure: true,
        setLogOutFailure: action.data,
      });
    case t.SET_AUTHENTICATION_SUCCESS:
      return Object.assign({}, state, {
        authentication: action.data,
        setAuthenticationSuccess: true,
        setAuthenticationFailure: false,
      });
    case t.SET_AUTHENTICATION_FAILURE:
      return Object.assign({}, state, {
        authentication: null,
        setAuthenticationSuccess: false,
        setAuthenticationFailure: true,
        authenticationFailure: action.data,
      });
    case t.GET_AUTH_SUCCESS:
      return Object.assign({}, state, {
        auth: action.data,
        getAuthSuccess: true,
        getAuthFailure: false,
      });
    case t.GET_AUTH_FAILURE:
      return Object.assign({}, state, {
        auth: null,
        getAuthSuccess: false,
        getAuthFailure: true,
        authFailure: action.data,
      });
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
    case t.CREATE_USER_SUCCESS:
      return Object.assign({}, state, {
        createUser: action.data,
        createUserFailure: true,
        createUserFailure: false,
      });
    case t.CREATE_USER_FAILURE:
      return Object.assign({}, state, {
        createUser: null,
        createUserFailure: false,
        createUserFailure: true,
        setUserFailure: action.data,
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
    case t.GET_SCORE_SUCCESS:
      return Object.assign({}, state, {
        score: action.data,
        getScoreSuccess: true,
        getScoreFailure: false,
      });
    case t.GET_SCORE_FAILURE:
      return Object.assign({}, state, {
        score: null,
        getScoreSuccess: false,
        getScoreFailure: true,
        scoreFailure: action.data,
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
    case t.UPDATE_POINTS_USER_SUCCESS:
      return Object.assign({}, state, {
        updatePointsUser: action.data,
        updatePointsUserSuccess: true,
        updatePointsUserFailure: false,
      });
    case t.UPDATE_POINTS_USER_FAILURE:
      return Object.assign({}, state, {
        updatePointsUser: null,
        updatePointsUserSuccess: false,
        updatePointsUserFailure: true,
        setupdatePointsUser: action.data,
      });
    default:
      return state;
  }
};
