import * as t from '../actionTypes';
import gamesServiceApi from '../services/games';

//get users
function receiveGames(json) {
    return {
        type: t.GET_GAMES_SUCCESS,
        data: json
    };
}

function receiveGamesError(error) {
    return {
        type: t.GET_GAMES_FAILURE,
        error
    };
}

export const fetchAllGames = () => (dispatch, getState) => {
    return gamesServiceApi
        .fetchAll()
        .then(json => {
            dispatch(receiveGames(json));
        })
        .catch(error => {
            dispatch(receiveGamesError(error));
        });
}