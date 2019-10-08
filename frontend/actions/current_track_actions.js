export const RECEIVE_CURRENT_TRACK = 'RECEIVE_CURRENT_TRACK';

export const receiveCurrentTrack = track => {
    return {
        type: RECEIVE_CURRENT_TRACK,
        track
    }
};