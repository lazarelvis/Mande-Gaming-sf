import * as t from '../actionTypes';
import usersServiceApi from '../services/user';

//get users
function receiveUsers(json) {
  return {
    type: t.GET_USERS_SUCCESS,
    data: json,
  };
}

function receiveUsersError(error) {
  return {
    type: t.GET_USERS_FAILURE,
    error,
  };
}

export const fetchAllUsers = () => (dispatch, getState) => {
  return usersServiceApi
    .fetchAll()
    .then((json) => {
      dispatch(receiveUsers(json));
    })
    .catch((error) => {
      dispatch(receiveUsersError(error));
    });
};

//create user
function setUser(json) {
  return {
    type: t.GET_USERS_SUCCESS,
    data: json,
  };
}

function setUserError(error) {
  return {
    type: t.GET_USERS_FAILURE,
    error,
  };
}

export const createUser = (data) => (dispatch, getState) => {
  return usersServiceApi
    .create(data)
    .then((json) => {
      dispatch(setUser(json));
    })
    .catch((error) => {
      dispatch(setUserError(error));
    });
};
