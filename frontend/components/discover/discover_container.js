import { connect } from 'react-redux';
import Discover from './discover';
import {fetchTracks} from '../../actions/track_actions';
import {receiveCurrentTrack} from '../../actions/current_track_actions';


const msp = (state, ownProps) => {
    return { tracks: state.entities.tracks || [] }
};


const mdp = dispatch => ({
    fetchTracks: () => dispatch(fetchTracks()),
    receiveCurrentTrack: track => dispatch(receiveCurrentTrack(track))
});

export default connect(msp, mdp)(Discover);