import * as GenreAPIUtil from '../util/genre_api_util';

export const RECEIVE_GENRES = 'RECEIVE_GENRES';

const receiveGenres = genres => ({
    type: RECEIVE_GENRES,
    genres
});

export const fetchGenres = () => dispatch => {
    return GenreAPIUtil.fetchGenres().then(response => dispatch(receiveGenres(response)))
};