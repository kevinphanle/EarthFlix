import modalReducer from './modal_reducer';
import { combineReducers } from 'redux';
import currentProfileReducer from './current_profile_reducer';

const uiReducer = combineReducers({
    modal: modalReducer,
    currentProfileId: currentProfileReducer
})

export default uiReducer;