
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import rootReducer from '../reducers/root_reducer';

let middleware = [ thunk ]
if (process.env.NODE_ENV !== 'production') {
  middleware = [ ...middleware, logger ]
}

const configureStore = (preloadedState = {}) => (
    createStore(
        rootReducer,
        preloadedState,
        applyMiddleware(...middleware)
    )
);

export default configureStore;