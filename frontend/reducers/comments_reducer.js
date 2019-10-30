import {
    RECEIVE_COMMENTS,
} from '../actions/comment_actions';

const commentsReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_COMMENTS:
            debugger
            return ;
        default:
            return state;
    }
};

export default commentsReducer;
