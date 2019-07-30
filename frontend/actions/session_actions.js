// login(user)(thunk action creator)
// logout()(thunk action creator)
// signup(user)(thunk action creator)
// receiveCurrentUser(currentUser)(regular action creator)
// logoutCurrentUser()(regular action creator)
// receiveErrors(errors)(regular action creator)

import * as APIUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_USER = 'LOGOUT_USER';

const receiveCurrentUser = (currentUser) => {
    return {
        type: RECEIVE_CURRENT_USER,
        currentUser
    }
};

const logoutCurrentUser = () => ({
    type: LOGOUT_USER
});

export const login = (user) => dispatch => (
    APIUtil.login(user).then(response => dispatch(receiveCurrentUser(response)))
);

export const logout = () => dispatch => (
    APIUtil.logout().then(response => dispatch(logoutCurrentUser()))
);

export const signup = (user) => dispatch => (
    APIUtil.signup(user).then(response => dispatch(receiveCurrentUser(response)))
);