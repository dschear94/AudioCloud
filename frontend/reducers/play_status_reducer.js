import {
    PLAY,
    PAUSE
} from '../actions/play_status_actions';

const playStatusReducer = (state = "paused", action) => {
    Object.freeze(state);
    switch (action.type) {
        case PLAY:
            return "playing";
        case PAUSE:
            return "paused";
        // case TIME_UPDATE:

        default:
            return state;
    }
};

export default playStatusReducer;