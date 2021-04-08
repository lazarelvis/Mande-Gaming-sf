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
};
// eslint-disable-next-line
export default (state = initialState, action) => {
  switch (action.type) {
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

    default:
      return state;
  }
};
