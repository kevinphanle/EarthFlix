import {
    RECEIVE_ALL_VIDEOS,
    RECEIVE_VIDEO
} from '../actions/show_actions';

import merge from 'lodash/merge';

const videosReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_ALL_VIDEOS:
            return action.videos;
        case RECEIVE_VIDEO:
            return merge({}, state, { [action.video.id]: action.video });
        default:
            return state;
    }
}

export default videosReducer;