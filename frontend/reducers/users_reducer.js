import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import {
    RECEIVE_LIKES,
    RECEIVE_LIKE,
    RECEIVE_UNLIKE,
} from '../actions/likes_actions';
import {
    RECEIVE_FOLLOWS,
    RECEIVE_FOLLOW,
    RECEIVE_UNFOLLOW,
} from '../actions/follows_actions';

const usersReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            return Object.assign({}, state, { [action.currentUser.id]: action.currentUser });
        case RECEIVE_LIKE:
            // return Object.assign({}, state, { [action.currentUser.id]: action.currentUser });
        case RECEIVE_FOLLOW:
            // return Object.assign({}, state, { [action.currentUser.id]: action.currentUser });
        case RECEIVE_UNLIKE:
            return Object.assign({}, state, { [action.currentUser.id]: action.currentUser });
        case RECEIVE_UNFOLLOW:
            return Object.assign({}, state, { [action.currentUser.id]: action.currentUser });
        default:
            return state;
    }
};

export default usersReducer;
