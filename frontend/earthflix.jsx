import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';


document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById("root");
    let store;
    
    if (window.currentUser) {
        const preloadedState = {
            entities: {
                users: { [window.currentUser.id]: window.currentUser }
            },
            session: { id: window.currentUser.id }
        };

        if (window.currentProfile) {
            preloadedState["ui"] = {};
            preloadedState["ui"]["currentProfileId"] = window.currentProfile.id
        }

        store = configureStore(preloadedState);
        delete window.currentUser;
        if (window.currentProfile) {
            delete window.currentProfile;
        }
    } else {
        store = configureStore();
    }
    

    window.getState = store.getState;
    window.dispatch = store.dispatch;

    //comment

    ReactDOM.render(<Root store={store}/>, root);
});