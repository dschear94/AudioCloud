import { connect } from 'react-redux';
import Discover from './discover';
import {fetchTracks, fetchTrack} from '../../actions/track_actions';
import {
    updateTrackPlays,
    // pauseTrack
} from '../../actions/current_track_actions';
import { playTrack, pauseTrack } from '../../actions/play_status_actions'
import { 
    getCurrentTrackId,
    getCurrentUser,
    selectTracksByLikes,
} from '../../reducers/selectors';
import {
    createLike,
    fetchLikes,
    deleteLike,
} from '../../actions/likes_actions'


const msp = (state) => {
    const currentTrackId = getCurrentTrackId(state);
    const trackStatus = state.ui.playStatus;
    let currentUser = getCurrentUser(state);
    let likedTracks = selectTracksByLikes(state, currentUser);

    return { 
        tracks: Object.values(state.entities.tracks) || [],
        currentTrackId: currentTrackId,
        trackStatus: trackStatus,
        currentUser: currentUser,
        likedTracks: likedTracks,
    }
};


const mdp = dispatch => ({
    fetchTracks: () => dispatch(fetchTracks()),
    fetchTrack: (trackId) => dispatch(fetchTrack(trackId)),
    updateTrackPlays: track => dispatch(updateTrackPlays(track)),
    pauseTrack: () => dispatch(pauseTrack()),
    playTrack: () => dispatch(playTrack()),
    createLike: like => dispatch(createLike(like)),
    deleteLike: like => dispatch(deleteLike(like)),
    fetchLikes: userId => dispatch(fetchLikes(userId))
});

export default connect(msp, mdp)(Discover);