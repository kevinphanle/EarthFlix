import * as ShowAPIUtil from '../util/show_api_util';

export const RECEIVE_SHOWS = "RECEIVE_SHOWS";
export const RECEIVE_SHOW = "RECEIVE_SHOW";


export const fetchShows = () => dispatch => {
    return ShowAPIUtil.fetchShows().then(response => dispatch(receiveShows(response)))
}

export const fetchShow = (id) => dispatch => {
    return ShowAPIUtil.fetchShow(id).then(response => dispatch(receiveShow(response)))
}

const receiveShows = (shows) => ({
    type: RECEIVE_SHOWS,
    shows
});

const receiveShow = (show) => {
    return {
        type: RECEIVE_SHOW,
        show
    }
}