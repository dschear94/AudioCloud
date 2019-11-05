import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Dashboard from './dashboard';
import { fetchTracks } from '../../actions/track_actions';
import { receiveCurrentTrack } from '../../actions/current_track_actions';


const msp = (state, ownProps) => {
    let artist = ownProps.match.params.artist ? 
    ownProps.match.params.artist :
    state.entities.artists ?
    state.entities.artists.username : "";

    return {
        artist: artist || ""
    }
};


const mdp = dispatch => ({
    // fetchTracks: () => dispatch(fetchTracks()),
    // receiveCurrentTrack: track => dispatch(receiveCurrentTrack(track))
});

export default withRouter(connect(msp, mdp)(Dashboard));