import * as APIUtil from '../util/like_api_util';

export const RECEIVE_LIKES = 'RECEIVE_LIKES';
export const CLEAR_LIKES = 'CLEAR_LIKES';
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

export const clearLikes = () => {
    return {
        type: CLEAR_LIKES
    }
};

// export const fetchLikes = () => dispatch => {
//     return APIUtil.fetchLikes().then(likes => (
//         dispatch(receiveLikes(likes))
//     ));
// };

export const fetchTrackLikes = (trackId) => dispatch => {
    return APIUtil.fetchTrackLikes(trackId).then(likes => (
        dispatch(receiveLikes(likes))
    ));
};


export const createLike = (like) => dispatch => {
    return APIUtil.createLike(like).then(like => (
        dispatch(receiveLike(like))
    ));
};

export const deleteLike = (likeId) => dispatch => {
    return APIUtil.deleteLike(likeId).then((likes) => (
        dispatch(receiveLikes(likes))
    ));
};