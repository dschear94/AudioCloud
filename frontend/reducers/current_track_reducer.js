import {
    RECEIVE_CURRENT_TRACK,
    RECEIVE_CURRENT_TRACK_AND_USER,
    // PAUSE_TRACK,
} from '../actions/current_track_actions';
import { 
    createCurrentTrackPlaying,
    createCurrentTrackPause
} from './selectors';

const currentTrackReducer = (state = null, action) => {
    Object.freeze(state);
    console.log(state)
    switch (action.type) {
        case RECEIVE_CURRENT_TRACK:
            return createCurrentTrackPlaying(action.track);
        case RECEIVE_CURRENT_TRACK_AND_USER:
            if (action.trackAndUser.currentUser) {
                if (!state){
                    return createCurrentTrackPlaying(action.trackAndUser.track);
                } else if (state.data.id === Object.values(action.trackAndUser.track)[0].id) {
                    return state.playing ? createCurrentTrackPause(action.trackAndUser.track) 
                    : createCurrentTrackPlaying(action.trackAndUser.track);
                } else {
                    return createCurrentTrackPlaying(action.trackAndUser.track)
                }
            } else {
                if (state) {
                    if (state.data.id === Object.values(action.trackAndUser)[0].id) {
                        return createCurrentTrackPlaying(action.trackAndUser);
                    } else {
                        return createCurrentTrackPause(action.trackAndUser);
                    }
                } else {
                    return createCurrentTrackPlaying(action.trackAndUser);
                }

            }
        default:
            return state;
    }
};

export default currentTrackReducer;
