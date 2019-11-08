import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import {
    RECEIVE_LIKES,
    RECEIVE_LIKE,
    RECEIVE_UNLIKE,
} from '../actions/likes_actions';

const usersReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            return Object.assign({}, state, { [action.currentUser.id]: action.currentUser });
        case RECEIVE_LIKE:
            // return Object.assign({}, state, { [action.currentUser.id]: action.currentUser });
        case RECEIVE_UNLIKE:
            return Object.assign({}, state, { [action.currentUser.id]: action.currentUser });
            debugger
        default:
            return state;
    }
};

export default usersReducer;
