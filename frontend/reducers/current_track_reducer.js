import {
    RECEIVE_CURRENT_TRACK,
    RECEIVE_CURRENT_TRACK_AND_USER,
    PAUSE_TRACK,
} from '../actions/current_track_actions';

const currentTrackReducer = (state = null, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_CURRENT_TRACK:
            return action.track;
        case RECEIVE_CURRENT_TRACK_AND_USER:
            if (action.trackAndUser.currentUser) {
                return action.trackAndUser.track;
            } else {
                return action.trackAndUser;
            }
        case PAUSE_TRACK:
            return "pause";
        default:
            return state;
    }
};

export default currentTrackReducer;
