import {
    RECEIVE_ALL_SHOWS,
    RECEIVE_SHOW
} from '../actions/show_actions';

import merge from 'lodash/merge';

const showsReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_ALL_SHOWS:
            return action.shows
        case RECEIVE_SHOW:
            return merge({}, state, { [action.show.id]: action.show })
        default:
            return state;
    }
}

export default showsReducer;

