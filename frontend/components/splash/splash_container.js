import { connect } from 'react-redux';
import { openModal } from '../../actions/modal_actions';
import Splash from './splash';
import {fetchTracks} from '../../actions/track_actions'

const msp = state => {
    debugger
    return { tracks: state.entities.tracks || [] };
};

const mdp = dispatch => {
    return ({
        fetchTracks: () => dispatch(fetchTracks()),
        openModal: modal => dispatch(openModal(modal))
    })
};

export default connect(msp, mdp)(Splash);