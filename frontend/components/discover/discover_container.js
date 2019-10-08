import { connect } from 'react-redux';
import Discover from './discover';
import {fetchTracks} from '../../actions/track_actions';


const msp = (state, ownProps) => {
    return { tracks: state.entities.tracks || [] }
};


const mdp = dispatch => ({
    fetchTracks: () => dispatch(fetchTracks())
});

export default connect(msp, mdp)(Discover);