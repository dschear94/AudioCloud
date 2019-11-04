import {
    RECEIVE_LIKES,
    RECEIVE_LIKE,
    CLEAR_LIKES,
} from '../actions/like_actions';

const commentsReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_LIKES:
            return Object.assign({}, action.likes);
        case RECEIVE_LIKE:
            return Object.assign({}, action.like);
        case CLEAR_LIKES:
            return {};
        default:
            return state;
    }
};

export default commentsReducer;
