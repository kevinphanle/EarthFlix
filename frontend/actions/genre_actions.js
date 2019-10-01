import * as GenreAPIUtil from '../util/genre_api_util';

export const RECEIVE_GENRES = 'RECEIVE_GENRES';
export const RECEIVE_GENRE = "RECEIVE_GENRE";

const receiveGenres = genres => ({
    type: RECEIVE_GENRES,
    genres
});

export const receiveGenre = (payload) => ({
    type: RECEIVE_GENRE,
    payload
})

export const fetchGenres = () => dispatch => {
    return GenreAPIUtil.fetchGenres().then(response => dispatch(receiveGenres(response)))
};

export const fetchGenre = (id) => dispatch => (
    genreApiUtil.fetchGenre(id).then( (genre) => dispatch(receiveGenre(genre)))
)