import { connect } from 'react-redux';
import { openModal } from '../../actions/modal_actions';
import Splash from './splash';
import {fetchTracks} from '../../actions/track_actions';
import { receiveCurrentTrack } from '../../actions/current_track_actions';


const msp = state => {
    return { 
        tracks: Object.values(state.entities.tracks) || [],
        currentUser: (state.session.id ? true : false)
    };
};

const mdp = dispatch => {
    return ({
        fetchTracks: () => dispatch(fetchTracks()),
        openModal: modal => dispatch(openModal(modal)),
        receiveCurrentTrack: track => dispatch(receiveCurrentTrack(track)),
    })
};

export default connect(msp, mdp)(Splash);