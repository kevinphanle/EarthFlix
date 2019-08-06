import {
    RECEIVE_VIDEOS,
    RECEIVE_VIDEO,
    RECEIVE_SHOW,
    RECEIVE_ALL_SHOWS
} from '../actions/show_actions';

import merge from 'lodash/merge';

const videosReducer = (state = {}, action) => {
    Object.freeze(state);

    switch (action.type) {
        // case RECEIVE_ALL_VIDEOS:
        //     return action.videos;
        case RECEIVE_VIDEO:
            // debugger
            return merge({}, state, { [action.video.id]: action.video });
        // case RECEIVE_SHOW:
        //     return merge({}, state, { [video.id]: video });
        // case RECEIVE_SHOWS:
        //     return videos;
        default:
            return state;
    }
}

export default videosReducer;