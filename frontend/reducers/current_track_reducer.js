import {
    RECEIVE_CURRENT_TRACK,
    RECEIVE_CURRENT_TRACK_AND_USER
} from '../actions/current_track_actions';

const currentTrackReducer = (state = null, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_CURRENT_TRACK:
            return action.track;
        case RECEIVE_CURRENT_TRACK_AND_USER:
            return action.trackAndUser.track;
        default:
            return state;
    }
};

export default currentTrackReducer;
