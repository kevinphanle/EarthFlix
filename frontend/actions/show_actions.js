import * as ShowAPIUtil from '../util/show_api_util';

export const RECEIVE_ALL_SHOWS = "RECEIVE_ALL_SHOWS";
export const RECEIVE_SHOW = "RECEIVE_SHOW";
export const RECEIVE_ALL_VIDEOS = "RECEIVE_ALL_VIDEOS";
export const RECEIVE_VIDEO = "RECEIVE_VIDEO";

const receiveVideos = (videos) => {
    return {
        type: RECEIVE_ALL_VIDEOS,
        videos
    }
}

const receiveVideo = (video) => {
    return {
        type: RECEIVE_VIDEO,
        video
    }
}

const receiveShows = (shows) => {
    return {
        type: RECEIVE_ALL_SHOWS,
        shows: shows === undefined ? {} : shows
    }
}

const receiveShow = (show) => {
    return {
        type: RECEIVE_SHOW,
        show
    }
}

export const fetchShows = () => dispatch => {
    ShowAPIUtil.fetchShows().then(response => dispatch(receiveShows(response)))
}

export const fetchShow = (id) => dispatch => {
    ShowAPIUtil.fetchShow(id).then(response => dispatch(receiveShow(response)))
}

export const fetchVideos = () => dispatch => {
    ShowAPIUtil.fetchVideos().then( response => dispatch(receiveVideos(response)))
}

export const fetchVideo = (id) => dispatch => {
    ShowAPIUtil.fetchVideo(id).then( response => dispatch(receiveVideo(response)))
}