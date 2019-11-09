import * as APIUtil from '../util/follows_api_util';

export const RECEIVE_FOLLOWS = 'RECEIVE_FOLLOWS';
export const RECEIVE_FOLLOW = 'RECEIVE_FOLLOW';
export const RECEIVE_UNFOLLOW = 'RECEIVE_UNFOLLOW';


export const receiveFollows = (follows) => {
    return {
        type: RECEIVE_FOLLOWS,
        follows
    }
};

export const receiveFollow = currentUser => {
    return {
        type: RECEIVE_FOLLOW,
        currentUser
    }
};

export const receiveUnFollow = currentUser => {
    return {
        type: RECEIVE_UNFOLLOW,
        currentUser
    }
};

export const fetchFollows = userId => dispatch => {
    return APIUtil.fetchFollows(userId).then(follows => (
        dispatch(receiveFollows(follows))
    ));
};



export const createFollow = follow => dispatch => {
    return APIUtil.createFollow(follow).then(currentUser => (
        dispatch(receiveFollow(currentUser))
    ));
};

export const deleteFollow = follow => dispatch => {
    return APIUtil.deleteFollow(follow).then(currentUser => (
        dispatch(receiveUnFollow(currentUser))
    ));
};