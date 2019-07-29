import { RECEIVE_CURRENT_USER, LOGOUT_USER } from '../actions/session_actions';
import merge from 'lodash/merge';

const _nullSession = {
    id: null
}

const sessionReducer = (state = _nullSession, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            return merge({}, state, { id: action.currentUser.id });
        case LOGOUT_USER:
            return merge({}, _nullSession);
        default: return state;
    }
}

export default sessionReducer;