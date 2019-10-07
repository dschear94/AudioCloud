import { connect } from 'react-redux';
import TrackUploadForm from './track_upload_form';
import { uploadTrack } from '../../actions/track_actions';


const msp = (state, ownProps) => {
    return state
};


const mdp = dispatch => ({
    uploadTrack: track => dispatch(uploadTrack(track))
});

export default connect(msp, mdp)(TrackUploadForm);