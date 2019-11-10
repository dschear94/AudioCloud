import { connect } from 'react-redux';
import Stream from './stream';
import { 
    fetchTracksByFollows, 
    fetchTracks 
} from '../../actions/track_actions';
import { updateTrackPlays } from '../../actions/current_track_actions';
import { 
    getCurrentUser,
    selectTracksByFollows
 } from '../../reducers/selectors';


const msp = (state, ownProps) => {

    let artist = getCurrentUser(state);
    let followedArtistTracks = selectTracksByFollows(state, artist)

    return { 
        tracks: followedArtistTracks,
        currentUser: artist
    }
};


const mdp = dispatch => ({
    fetchTracks: () => dispatch(fetchTracks()),
    fetchTracksByFollows: artistId => dispatch(fetchTracksByFollows(artistId)),
    updateTrackPlays: track => dispatch(updateTrackPlays(track))
});

export default connect(msp, mdp)(Stream);