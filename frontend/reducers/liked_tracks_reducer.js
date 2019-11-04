import {
    RECEIVE_LIKED_TRACKS,
    RECEIVE_LIKED_TRACK,
} from '../actions/liked_track_actions';

const likedTracksReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_LIKED_TRACKS:
            return Object.assign({}, action.likedTracks);
        case RECEIVE_LIKED_TRACK:
            return Object.assign({}, action.likedTrack);
        default:
            return state;
    }
};

export default likedTracksReducer;
