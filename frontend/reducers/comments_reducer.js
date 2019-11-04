import {
    RECEIVE_COMMENTS,
    RECEIVE_COMMENT,
    CLEAR_COMMENTS,
} from '../actions/comment_actions';

const commentsReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_COMMENTS:
            return Object.assign({}, action.comments);
        case RECEIVE_COMMENT:
            return Object.assign({}, action.comment);
        case CLEAR_COMMENTS:
            return {};
        default:
            return state;
    }
};

export default commentsReducer;
