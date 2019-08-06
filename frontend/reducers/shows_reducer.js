import {
    RECEIVE_SHOWS,
    RECEIVE_SHOW
} from '../actions/show_actions';

import merge from 'lodash/merge';

const showsReducer = (state = {}, action) => {
    Object.freeze(state);
    // debugger;
    switch (action.type) {
        case RECEIVE_SHOWS:
            return merge({}, action.shows);
        case RECEIVE_SHOW:
            return merge({}, state, action.shows)
        default:
            return state;
    }
}

export default showsReducer;

