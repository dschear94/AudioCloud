import * as APIUtil from '../util/recent_plays_api_util';

export const RECEIVE_RECENT_PLAYS = 'RECEIVE_RECENT_PLAYS';
export const RECEIVE_RECENT_PLAY = 'RECEIVE_RECENT_PLAY';


// export const receiveRecentPlays = (currentUser) => {
//     return {
//         type: RECEIVE_RecentPlayS,
//         currentUser
//     }
// };

export const receiveRecentPlay = (currentUser) => {
    return {
        type: RECEIVE_RECENT_PLAY,
        currentUser
    }
};

// export const fetchRecentPlays = (userId) => dispatch => {
//     return APIUtil.fetchRecentPlays(userId).then(RecentPlays => (
//         dispatch(receiveRecentPlays(RecentPlays))
//     ));
// };

export const createRecentPlay = recentPlay => dispatch => {
    return APIUtil.createRecentPlay(recentPlay).then(currentUser => (
        dispatch(receiveRecentPlay(currentUser))
    ));
};