import { connect } from 'react-redux';
import Discover from './discover';
import {fetchTracks} from '../../actions/track_actions';
import {updateTrackPlays} from '../../actions/current_track_actions';


const msp = (state, ownProps) => {
    return { 
        tracks: Object.values(state.entities.tracks) || []
    }
};


const mdp = dispatch => ({
    fetchTracks: () => dispatch(fetchTracks()),
    updateTrackPlays: track => dispatch(updateTrackPlays(track))
});

export default connect(msp, mdp)(Discover);