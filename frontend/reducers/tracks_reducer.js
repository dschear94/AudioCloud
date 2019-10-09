import { 
    RECEIVE_TRACKS ,
    // RECEIVE_TRACK 
} from '../actions/track_actions';

const tracksReducer = (state = [], action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_TRACKS:
            return action.tracks;
        // case RECEIVE_TRACK:
        //     return action.track;
        default:
            return state;
    }
};

export default tracksReducer;
