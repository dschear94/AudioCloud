import { connect } from 'react-redux';
import TrackUploadForm from './track_upload_form';
import { 
    uploadTrack,
    fetchTracks } from '../../actions/track_actions';


const msp = (state, ownProps) => {
    return {
        currentUser: state.session.id
    }
};


const mdp = dispatch => ({
    uploadTrack: track => dispatch(uploadTrack(track)),
    fetchTracks: () => dispatch(fetchTracks())
});

export default connect(msp, mdp)(TrackUploadForm);