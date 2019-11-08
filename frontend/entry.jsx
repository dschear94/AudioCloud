import React from "react";
import ReactDOM from "react-dom";
import Root from "./components/root"
import configureStore from './store/store';

document.addEventListener("DOMContentLoaded", () => {
    let store;
    if (window.currentUser) {
        const preloadedState = {
            session: { id: window.currentUser.id },
            entities: {
                users: { [window.currentUser.id]: window.currentUser },
                likes: window.currentUserLikes,
                follows: window.currentUserFollows,
            }
        };
        store = configureStore(preloadedState);
        delete window.currentUser;
        delete window.currentUserLikes;
        delete window.currentUserFollows;
    } else {
        store = configureStore();
    }

    const root = document.getElementById("yo");
    ReactDOM.render(<Root store={store}/>, root);
});