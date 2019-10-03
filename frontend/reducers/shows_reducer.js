import {
    RECEIVE_SHOWS,
    RECEIVE_SHOW
} from '../actions/show_actions';
import { RECEIVE_SEARCH_RESULTS } from '../actions/search_actions';
import { RECEIVE_GENRE } from '../actions/genre_actions';

import merge from 'lodash/merge';

const showsReducer = (state = {}, action) => {
    Object.freeze(state);
    // debugger;
    switch (action.type) {
        case RECEIVE_SHOWS:
            return merge({}, action.shows);
        case RECEIVE_SHOW:
            return merge({}, state, { [action.show.id]: action.show })
        case RECEIVE_GENRE: 
            return merge({}, state, action.payload.shows);
        case RECEIVE_SEARCH_RESULTS:
            console.log(action)
            return merge({}, state, action.results);
        default:
            return state;
    }
}

export default showsReducer;

