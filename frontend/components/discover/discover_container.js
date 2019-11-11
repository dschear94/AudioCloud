import { connect } from 'react-redux';
import Discover from './discover';
import {fetchTracks} from '../../actions/track_actions';
import {
    updateTrackPlays,
    pauseTrack
} from '../../actions/current_track_actions';
import { getCurrentTrackId } from '../../reducers/selectors';


const msp = (state, ownProps) => {
    const currentTrackId = getCurrentTrackId(state);
    const trackStatus = state.entities.currentTrack ? 
        state.entities.currentTrack.playing
        : false;

    return { 
        tracks: Object.values(state.entities.tracks) || [],
        currentTrackId: currentTrackId,
        trackStatus: trackStatus,
    }
};


const mdp = dispatch => ({
    fetchTracks: () => dispatch(fetchTracks()),
    updateTrackPlays: track => dispatch(updateTrackPlays(track)),
    pauseTrack: () => dispatch(pauseTrack()),
});

export default connect(msp, mdp)(Discover);