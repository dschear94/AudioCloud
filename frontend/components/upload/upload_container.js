import { connect } from 'react-redux';
import UploadForm from './upload_form';


const msp = (state, ownProps) => {
    return state
};


const mdp = dispatch => {
    return {}
};

export default connect(msp, mdp)(UploadForm);