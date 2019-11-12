import { connect } from 'react-redux';
import SocialSidebar from './social_sidebar';
import { fetchTracks } from '../../actions/track_actions';
import {
    updateTrackPlays,
    // pauseTrack
} from '../../actions/current_track_actions';
import { playTrack, pauseTrack } from '../../actions/play_status_actions'
import { getCurrentTrackId } from '../../reducers/selectors';


const msp = (state, ownProps) => {
    const currentTrackId = getCurrentTrackId(state);
    const trackStatus = state.ui.playStatus;

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
    playTrack: () => dispatch(playTrack()),
});

export default connect(msp, mdp)(SocialSidebar);