import * as APIUtil from '../util/track_api_util';

export const RECEIVE_CURRENT_TRACK = 'RECEIVE_CURRENT_TRACK';
export const PAUSE_TRACK = 'PAUSE_TRACK';
export const RECEIVE_CURRENT_TRACK_AND_USER = 'RECEIVE_CURRENT_TRACK_AND_USER';

// export const receiveCurrentTrack = track => {
//     return {
//         type: RECEIVE_CURRENT_TRACK,
//         track
//     }
// };


// export const updateTrackPlays = (track) => dispatch => {
//     return APIUtil.updateTrackPlays(track).then(track => (
//         dispatch(receiveCurrentTrack(track))
//     ));
// };

export const receiveCurrentTrackAndUser = trackAndUser => {
    return {
        type: RECEIVE_CURRENT_TRACK_AND_USER,
        trackAndUser
    }
};

export const receivePauseTrack = () => {
    return { type: PAUSE_TRACK }
           
};


export const updateTrackPlays = (track) => dispatch => {
    return APIUtil.updateTrackPlays(track).then(trackAndUser => (
        dispatch(receiveCurrentTrackAndUser(trackAndUser))
    ));
};

export const pauseTrack = () => {
    return dispatch(receivePauseTrack);
}