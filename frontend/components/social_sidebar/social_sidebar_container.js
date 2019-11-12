import { connect } from 'react-redux';
import SocialSidebar from './social_sidebar';
import { 
    fetchTracks,
    fetchTracksByLikes,
    fetchTracksByRecentPlays
} from '../../actions/track_actions';
import {
    updateTrackPlays,
    // pauseTrack
} from '../../actions/current_track_actions';
import { playTrack, pauseTrack } from '../../actions/play_status_actions'
import { getCurrentTrackId, getCurrentUser, selectTracksByLikes, selectTracksByRecentPlays } from '../../reducers/selectors';


const msp = (state, ownProps) => {
    const trackStatus = state.ui.playStatus;
    let currentUser = getCurrentUser(state);
    let currentTrackId = getCurrentTrackId(state);
    let likedTracks = selectTracksByLikes(state, currentUser);
    const recentPlays = selectTracksByRecentPlays(state, currentUser);

    return {
        currentUser: currentUser,
        tracks: Object.values(state.entities.tracks) || [],
        currentTrackId: currentTrackId,
        trackStatus: trackStatus,
        likedTracks: likedTracks,
        recentPlays: recentPlays,
    }
};


const mdp = dispatch => ({
    fetchTracks: () => dispatch(fetchTracks()),
    fetchTracksByLikes: (artistId) => dispatch(fetchTracksByLikes(artistId)),
    fetchTracksByRecentPlays: artistId => dispatch(fetchTracksByRecentPlays(artistId)),

    updateTrackPlays: track => dispatch(updateTrackPlays(track)),
    pauseTrack: () => dispatch(pauseTrack()),
    playTrack: () => dispatch(playTrack()),
});

export default connect(msp, mdp)(SocialSidebar);