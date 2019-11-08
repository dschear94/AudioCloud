import * as APIUtil from '../util/likes_api_util';

export const RECEIVE_LIKES = 'RECEIVE_LIKES';
export const RECEIVE_LIKE = 'RECEIVE_LIKE';
export const RECEIVE_UNLIKE = 'RECEIVE_UNLIKE';


// export const receiveLikes = (currentUser) => {
//     return {
//         type: RECEIVE_LIKES,
//         currentUser
//     }
// };

export const receiveLike = (currentUser) => {
    return {
        type: RECEIVE_LIKE,
        currentUser
    }
};

export const receiveUnLike = (currentUser) => {
    return {
        type: RECEIVE_UNLIKE,
        currentUser
    }
};


// delete like





export const fetchLikes = (userId) => dispatch => {
    return APIUtil.fetchLikes(userId).then(likes => (
        dispatch(receiveLikes(likes))
    ));
};



export const createLike = (like) => dispatch => {
    return APIUtil.createLike(like).then(currentUser => (
        dispatch(receiveLike(currentUser))
    ));
};

export const deleteLike = like => dispatch => {
    return APIUtil.deleteLike(like).then(currentUser => (
        dispatch(receiveUnLike(currentUser))
    ));
};