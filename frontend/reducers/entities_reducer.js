import { combineReducers } from 'redux';

import usersReducer from './users_reducer';
import showsReducer from './shows_reducer';
import videosReducer from './videos_reducer';

const entitiesReducer = combineReducers({
    users: usersReducer,
    shows: showsReducer,
    videos: videosReducer
})

export default entitiesReducer;