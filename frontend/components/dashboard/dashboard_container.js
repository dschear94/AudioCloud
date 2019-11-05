import { connect } from 'react-redux';
import Dashboard from './dashboard';
import { fetchTracks } from '../../actions/track_actions';
import { receiveCurrentTrack } from '../../actions/current_track_actions';


const msp = (state, ownProps) => {
    debugger
    return {
        // tracks: Object.values(state.entities.tracks) || []
    }
};


const mdp = dispatch => ({
    // fetchTracks: () => dispatch(fetchTracks()),
    // receiveCurrentTrack: track => dispatch(receiveCurrentTrack(track))
});

export default connect(msp, mdp)(Dashboard);