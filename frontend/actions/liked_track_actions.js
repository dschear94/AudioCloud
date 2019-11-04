import * as APIUtil from '../util/liked_track_api_util';

export const RECEIVE_LIKED_TRACKS = 'RECEIVE_LIKED_TRACKS';
export const RECEIVE_LIKED_TRACK = 'RECEIVE_LIKED_TRACK';


export const receiveLikedTracks = (likedTracks) => {
    return {
        type: RECEIVE_LIKED_TRACKS,
        likedTracks
    }
};

export const receiveLikedTrack = (likedTrack) => {
    return {
        type: RECEIVE_LIKED_TRACK,
        likedTrack
    }
};

export const fetchLikedTracks = (userId) => dispatch => {
    return APIUtil.fetchLikedTracks(userId).then(likedTracks => (
        dispatch(receiveLikedTracks(likedTracks))
    ));
};



export const createLikedTrack = (likedTrack) => dispatch => {
    return APIUtil.createLikedTrack(likedTrack).then(likedTracks => (
        dispatch(receiveLikedTracks(likedTracks))
    ));
};

export const deleteLikedTrack = (likedTrackId) => dispatch => {
    return APIUtil.deleteLikedTrack(likedTrackId).then((likedTracks) => (
        dispatch(receiveLikedTracks(likedTracks))
    ));
};