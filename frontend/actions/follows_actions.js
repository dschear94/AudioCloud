import * as APIUtil from '../util/follows_api_util';

export const RECEIVE_FOLLOWS = 'RECEIVE_FOLLOWS';
export const RECEIVE_FOLLOW = 'RECEIVE_FOLLOW';


export const receiveFollows = (follows) => {
    return {
        type: RECEIVE_FOLLOWS,
        follows
    }
};

export const receiveFollow = (follow) => {
    return {
        type: RECEIVE_FOLLOW,
        follow
    }
};

export const fetchFollows = (userId) => dispatch => {
    return APIUtil.fetchFollows(userId).then(follows => (
        dispatch(receiveFollows(follows))
    ));
};



export const createFollow = (follow) => dispatch => {
    return APIUtil.createFollow(follow).then(follows => (
        dispatch(receiveFollows(follows))
    ));
};

export const deleteFollow = (followId) => dispatch => {
    return APIUtil.deleteFollow(followId).then((follows) => (
        dispatch(receiveFollows(follows))
    ));
};