import { connect } from 'react-redux';
import Stream from './stream';
import { 
    fetchTracksByFollows, 
    fetchTracks 
} from '../../actions/track_actions';
import { 
    updateTrackPlays,
} from '../../actions/current_track_actions';
import { 
    getCurrentUser,
    selectTracksByFollows,
    getCurrentTrackId
 } from '../../reducers/selectors';
import { playTrack, pauseTrack } from '../../actions/play_status_actions'


const msp = (state, ownProps) => {

    let artist = getCurrentUser(state);
    let followedArtistTracks = selectTracksByFollows(state, artist);
    const currentTrackId = getCurrentTrackId(state);
    const trackStatus = state.ui.playStatus;

    return { 
        tracks: followedArtistTracks,
        currentUser: artist,
        currentTrackId: currentTrackId,
        trackStatus: trackStatus,
    }
};


const mdp = dispatch => ({
    fetchTracks: () => dispatch(fetchTracks()),
    fetchTracksByFollows: artistId => dispatch(fetchTracksByFollows(artistId)),
    updateTrackPlays: track => dispatch(updateTrackPlays(track)),
    pauseTrack: () => dispatch(pauseTrack()),
    playTrack: () => dispatch(playTrack()),
});

export default connect(msp, mdp)(Stream);