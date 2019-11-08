import * as APIUtil from '../util/likes_api_util';

export const RECEIVE_LIKES = 'RECEIVE_LIKES';
export const RECEIVE_LIKE = 'RECEIVE_LIKE';


export const receiveLikes = (likes) => {
    return {
        type: RECEIVE_LIKES,
        likes
    }
};

export const receiveLike = (like) => {
    return {
        type: RECEIVE_LIKE,
        like
    }
};


// delete like





export const fetchLikes = (userId) => dispatch => {
    return APIUtil.fetchLikes(userId).then(likes => (
        dispatch(receiveLikes(likes))
    ));
};



export const createLike = (like) => dispatch => {
    return APIUtil.createLike(like).then(likes => (
        dispatch(receiveLikes(likes))
    ));
};

export const deleteLike = (likeId) => dispatch => {
    return APIUtil.deleteLike(likeId).then((likes) => (
        dispatch(receiveLikes(likes))
    ));
};