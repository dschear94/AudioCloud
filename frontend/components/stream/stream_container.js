import { connect } from 'react-redux';
import Stream from './stream';
import { 
    fetchTracksByFollows, 
    fetchTracks,
    fetchTrack
} from '../../actions/track_actions';
import { 
    updateTrackPlays,
} from '../../actions/current_track_actions';
import { 
    getCurrentUser,
    selectTracksByFollows,
    getCurrentTrackId
 } from '../../reducers/selectors';
import { playTrack, pauseTrack } from '../../actions/play_status_actions';
import {
    createLike,
    fetchLikes,
    deleteLike,
} from '../../actions/likes_actions'


const msp = (state, ownProps) => {

    let currentUser = getCurrentUser(state);
    let followedArtistTracks = selectTracksByFollows(state, currentUser);
    const currentTrackId = getCurrentTrackId(state);
    const trackStatus = state.ui.playStatus;

    return { 
        tracks: followedArtistTracks,
        currentUser: currentUser,
        currentTrackId: currentTrackId,
        trackStatus: trackStatus,
    }
};


const mdp = dispatch => ({
    fetchTracks: () => dispatch(fetchTracks()),
    fetchTrack: (trackId) => dispatch(fetchTrack(trackId)),
    fetchTracksByFollows: artistId => dispatch(fetchTracksByFollows(artistId)),
    updateTrackPlays: track => dispatch(updateTrackPlays(track)),
    pauseTrack: () => dispatch(pauseTrack()),
    playTrack: () => dispatch(playTrack()),
    createLike: like => dispatch(createLike(like)),
    deleteLike: like => dispatch(deleteLike(like)),
    fetchLikes: userId => dispatch(fetchLikes(userId))

});

export default connect(msp, mdp)(Stream);