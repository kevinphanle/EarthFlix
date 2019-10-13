import { combineReducers } from 'redux';

import usersReducer from './users_reducer';
import showsReducer from './shows_reducer';
import genresReducer from './genres_reducer';
import myListsReducer from './my_lists_reducer';
import searchReducer from './search_reducer';
import profilesReducer from './profile_reducer';

const entitiesReducer = combineReducers({
    users: usersReducer,
    shows: showsReducer,
    genres: genresReducer,
    myLists: myListsReducer,
    searchResults: searchReducer,
    profiles: profilesReducer

})

export default entitiesReducer;