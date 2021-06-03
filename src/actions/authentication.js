import * as t from '../actionTypes';
import client from '../services/api/feathers';

//login
function receiveAuthentication(json) {
  return {
    type: t.SET_AUTHENTICATION_SUCCESS,
    data: json,
  };
}

function receiveAuthenticationError(error) {
  return {
    type: t.SET_AUTHENTICATION_FAILURE,
    error,
  };
}

export const fetchAuthenticationUser = (data) => (dispatch, getState) => {
  return client
    .authenticate(data)
    .then((json) => {
      dispatch(receiveAuthentication(json));
    })
    .catch((error) => {
      dispatch(receiveAuthenticationError(error));
    });
};

//reAutenticate
function receiveAuth(json) {
  return {
    type: t.GET_AUTH_SUCCESS,
    data: json,
  };
}

function receiveAuthError(error) {
  return {
    type: t.GET_AUTH_FAILURE,
    error,
  };
}

export const fetchAuthUser = () => (dispatch, getState) => {
  return client
    .reAuthenticate()
    .then((json) => {
      dispatch(receiveAuth(json));
    })
    .catch((error) => {
      dispatch(receiveAuthError(error));
    });
};

export const logOutUser = () => {
  client.logout();
};
