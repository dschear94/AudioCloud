import {
    RECEIVE_CURRENT_TRACK
} from '../actions/current_track_actions';

const currentTrackReducer = (state = null, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_CURRENT_TRACK:
            return action.track;
        default:
            return state;
    }
};

export default currentTrackReducer;
