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

export const myListsHashByShowId = (state) => {
    let hash = {};
    Object.values(state.entities.myLists).forEach(myList => {
        hash[myList.showId] = myList;
    })
    return hash;
}

export const myListsShows = (state) => {
    let myListsHash = myListsHashByShowId(state);
    let videos = Object.keys(myListsHash).map(showId => {
        return state.entities.shows[showId];
    })
    return videos;
}

export const searchResultShows = state => {
    let videos = [];
    state.entities.searchResults.forEach( showId => {
        videos.push(state.entities.shows[showId]);
    })
    return videos;
}

const thumbnails = [
    "https://earthflix-dev.s3-us-west-1.amazonaws.com/profiles/capt.png",
    "https://earthflix-dev.s3-us-west-1.amazonaws.com/profiles/chicken.png",
    "https://earthflix-dev.s3-us-west-1.amazonaws.com/profiles/cop.png",
    "https://earthflix-dev.s3-us-west-1.amazonaws.com/profiles/girl.png",
    "https://earthflix-dev.s3-us-west-1.amazonaws.com/profiles/panda.png",
    "https://earthflix-dev.s3-us-west-1.amazonaws.com/profiles/penguin.png"
]

export const randomProfileThumbnail = () => {
    return thumbnails[Math.floor(Math.random() * thumbnails.length)]
}