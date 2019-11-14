import * as APIUtil from '../util/track_api_util';




export const RECEIVE_TRACKS = 'RECEIVE_TRACKS';
export const RECEIVE_TRACK = 'RECEIVE_TRACK';


export const receiveTracks = tracks => {
    return {
        type: RECEIVE_TRACKS,
        tracks
    }
};

export const receiveTrack = track => {
    return {
        type: RECEIVE_TRACK,
        track
    }
};

export const fetchTracksByRecentPlays = userId => dispatch => {
    return APIUtil.fetchTracksByRecentPlays(userId).then(tracks => (
        dispatch(receiveTracks(tracks))
    ));
}

export const fetchTracksByFollows = userId => dispatch => {
    return APIUtil.fetchTracksByFollows(userId).then(tracks => (
        dispatch(receiveTracks(tracks))
    ));
}

export const fetchTracksByLikes = userId => dispatch => {
    return APIUtil.fetchTracksByLikes(userId).then(tracks => (
        dispatch(receiveTracks(tracks))
    ));
}

export const fetchTracks = () => dispatch => {
    return APIUtil.fetchTracks().then(tracks => (
        dispatch(receiveTracks(tracks))
    ));
};

export const fetchTrack = (trackId) => dispatch => {
    return APIUtil.fetchTrack(trackId).then(track => (
        dispatch(receiveTrack(track))
    ));
};

export const fetchTracksByArtist = artistId => dispatch => {
    return APIUtil.fetchTracksByArtist(artistId).then(tracks => (
        dispatch(receiveTracks(tracks))
    ));
};

export const uploadTrack = (track) => dispatch => {
    return APIUtil.uploadTrack(track).then(track => (
        dispatch(receiveTrack(track))
    ));
};