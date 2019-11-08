import { connect } from 'react-redux';
import Stream from './stream';
import { 
    fetchTracksByFollows, 
    fetchTracks 
} from '../../actions/track_actions';
import { receiveCurrentTrack } from '../../actions/current_track_actions';
import { getCurrentUser } from '../../reducers/selectors';


const msp = (state, ownProps) => {
    return { 
        tracks: Object.values(state.entities.tracks) || [],
        currentUser: getCurrentUser(state)
    }
};


const mdp = dispatch => ({
    fetchTracks: () => dispatch(fetchTracks()),
    fetchTracksByFollows: artistId => dispatch(fetchTracksByFollows(artistId)),
    receiveCurrentTrack: track => dispatch(receiveCurrentTrack(track))
});

export default connect(msp, mdp)(Stream);