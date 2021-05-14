import * as t from '../actionTypes';
import scoreEndpoint from '../services/score';

//get score by username
function getScoreByUsername(json) {
  return {
    type: t.GET_SCORE_BY_USERNAME_SUCCESS,
    data: json,
  };
}

function getScoreByUsernameError(error) {
  return {
    type: t.GET_SCORE_BY_USERNAME_FAILURE,
    error,
  };
}

export const fetchScoreByUsername = (params) => (dispatch, getState) => {
  return scoreEndpoint
    .find(`username=${params}`)
    .then((json) => {
      dispatch(getScoreByUsername(json));
    })
    .catch((error) => {
      dispatch(getScoreByUsernameError(error));
    });
};

//create username and score
function sendScore(json) {
  return {
    type: t.CREATE_SCORE_SUCCESS,
    data: json,
  };
}

function sendScoreError(error) {
  return {
    type: t.CREATE_SCORE_SUCCESS,
    error,
  };
}

export const createScore = (data) => (dispatch, getState) => {
  return scoreEndpoint
    .create(data)
    .then((json) => {
      dispatch(sendScore(json));
    })
    .catch((error) => {
      dispatch(sendScoreError(error));
    });
};
