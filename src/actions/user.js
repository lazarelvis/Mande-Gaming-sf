import * as t from '../actionTypes';
import usersServiceApi from '../services/user';

//get users
function receiveUsers(json) {
    return {
        type: t.GET_USERS_SUCCESS,
        data: json
    };
}

function receiveUsersError(error) {
    return {
        type: t.GET_USERS_FAILURE,
        error
    };
}

export const fetchAllUsers = () => (dispatch, getState) => {
    return usersServiceApi
        .fetchAll()
        .then(json => {
            dispatch(receiveUsers(json));
        })
        .catch(error => {
            dispatch(receiveUsersError(error));
        });
}