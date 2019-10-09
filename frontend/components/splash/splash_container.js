import { connect } from 'react-redux';
import { openModal } from '../../actions/modal_actions';
import Splash from './splash';

const msp = state => {
    return { photos: state.entities.photos } || [];
};

const mdp = dispatch => {
    return ({
        fetchPhotos: () => dispatch(fetchPhotos()),
        openModal: modal => dispatch(openModal(modal))
    })
};

export default connect(msp, mdp)(Splash);