import * as APIUtil from '../util/track_api_util';

export const RECEIVE_CURRENT_TRACK = 'RECEIVE_CURRENT_TRACK';

export const receiveCurrentTrack = track => {
    return {
        type: RECEIVE_CURRENT_TRACK,
        track
    }
};


export const updateTrackPlays = (track) => dispatch => {
    return APIUtil.updateTrackPlays(track).then(track => (
        dispatch(receiveCurrentTrack(track))
    ));
};