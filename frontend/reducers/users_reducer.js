import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER } from '../actions/session_actions';
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
import {
    RECEIVE_CURRENT_TRACK,
    RECEIVE_CURRENT_TRACK_AND_USER
} from '../actions/current_track_actions';

const usersReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            return { [action.currentUser.id]: action.currentUser };
        case RECEIVE_LIKE:
            // return Object.assign({}, state, { [action.currentUser.id]: action.currentUser });
        case RECEIVE_FOLLOW:
            // return Object.assign({}, state, { [action.currentUser.id]: action.currentUser });
        case RECEIVE_UNLIKE:
            return { [action.currentUser.id]: action.currentUser };
        case RECEIVE_UNFOLLOW:
            return { [action.currentUser.id]: action.currentUser };
        case RECEIVE_CURRENT_TRACK_AND_USER:
            if (action.trackAndUser.currentUser) {
                return { [action.trackAndUser.currentUser.id]: action.trackAndUser.currentUser };
            } else {
                return state;
            }
        case LOGOUT_CURRENT_USER:
            return {};
        default:
            return state;
    }
};

export default usersReducer;
