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

export async function logOutUser() {
  await client.logout();
}

//logout
//reAutenticate
function receiveLogOut(json) {
  return {
    type: t.SET_AUTH_LOG_OUT_SUCCESS,
    data: json,
  };
}

function receiveLogOutError(error) {
  return {
    type: t.SET_AUTH_LOG_OUT_FAILURE,
    error,
  };
}

export const fetchLogOut = () => (dispatch, getState) => {
  return client
    .logout()
    .then((json) => {
      dispatch(receiveLogOut(json));
    })
    .catch((error) => {
      dispatch(receiveLogOutError(error));
    });
};
