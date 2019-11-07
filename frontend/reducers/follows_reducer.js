import {
    RECEIVE_FOLLOWS,
    RECEIVE_FOLLOW,
} from '../actions/follows_actions';

const followsReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_FOLLOWS:
            return Object.assign({}, action.follows);
        case RECEIVE_FOLLOW:
            return Object.assign({}, action.follow);
        default:
            return state;
    }
};

export default followsReducer;
