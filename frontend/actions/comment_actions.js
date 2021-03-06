import * as APIUtil from '../util/comment_api_util';

export const RECEIVE_COMMENTS = 'RECEIVE_COMMENTS';
export const CLEAR_COMMENTS = 'CLEAR_COMMENTS';
export const RECEIVE_COMMENT = 'RECEIVE_COMMENT';


export const receiveComments = (comments) => {
    return {
        type: RECEIVE_COMMENTS,
        comments
    }
};

export const receiveComment = (comment) => {
    return {
        type: RECEIVE_COMMENT,
        comment
    }
};

export const clearComments = () => {
    return {
        type: CLEAR_COMMENTS
    }
};

export const fetchComments = () => dispatch => {
    return APIUtil.fetchComments().then(comments => (
        dispatch(receiveComments(comments))
    ));
};

export const fetchTrackComments = (trackId) => dispatch => {
    return APIUtil.fetchTrackComments(trackId).then(comments => (
        dispatch(receiveComments(comments))
    ));
};


export const createComment = (comment) => dispatch => {
    return APIUtil.createComment(comment).then(comment => (
        dispatch(receiveComment(comment))
    ));
};

export const deleteComment = (commentId) => dispatch => {
    return APIUtil.deleteComment(commentId).then(comments => (
        dispatch(receiveComments(comments))
    ));
};