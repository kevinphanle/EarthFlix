import * as ShowAPIUtil from '../util/show_api_util';

export const RECEIVE_SHOWS = "RECEIVE_SHOWS";
export const RECEIVE_SHOW = "RECEIVE_SHOW";
export const RECEIVE_VIDEO = "RECEIVE_VIDEO";
// export const RECEIVE_ALL_VIDEOS = "RECEIVE_ALL_VIDEOS";



export const fetchShows = () => dispatch => {
    return ShowAPIUtil.fetchShows().then(payload => dispatch(receiveShows(payload)))
}

export const fetchShow = (id) => dispatch => {
    return ShowAPIUtil.fetchShow(id).then(payload => dispatch(receiveShow(payload)))
}


export const fetchVideo = (id) => dispatch => {
    return ShowAPIUtil.fetchVideo(id).then(video => dispatch(receiveVideo(video)))
}


const receiveVideo = (video) => {
    return {
        type: RECEIVE_VIDEO,
        video
    }
}
const receiveShows = (shows) => ({
    type: RECEIVE_SHOWS,
    shows,
    // videos,
});

const receiveShow = (show) => {
    return {
        type: RECEIVE_SHOW,
        show,
    }
}