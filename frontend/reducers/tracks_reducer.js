import { 
    RECEIVE_TRACKS,
    RECEIVE_TRACK
} from '../actions/track_actions';
import {
    RECEIVE_CURRENT_TRACK,
    RECEIVE_CURRENT_TRACK_AND_USER
} from '../actions/current_track_actions';

const tracksReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_TRACKS:
            return Object.assign({}, state, action.tracks);
        case RECEIVE_TRACK:
            return Object.assign({}, state, action.track);
        case RECEIVE_CURRENT_TRACK:
            return Object.assign({}, state, action.track);
        case RECEIVE_CURRENT_TRACK_AND_USER:
            return Object.assign({}, state, action.trackAndUser.track);
        default:
            return state;
    }
};

export default tracksReducer;
