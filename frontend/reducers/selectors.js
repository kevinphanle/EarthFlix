import { createSelector } from 'reselect';

export const genresSelector = (state) => (
    Object.values(state.entities.genres)
)

const getShowGenres = (state, props) => state.entities.shows[props.show.id].genre_ids;

const getGenreNames = (state) => state.entities.genres;


export const makeSelectGenre = () => createSelector(
    [getShowGenres, getGenreNames],
    (showGenreIds = [], genres) => {
        return showGenreIds.map(id => ({
            id,
            name: genres[id].name
        }))
    }
)