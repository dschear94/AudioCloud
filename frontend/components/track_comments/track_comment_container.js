import { connect } from 'react-redux';
import TrackCommentIndex from './track_comment_index';
import { fetchTracks } from '../../actions/track_actions';
import { receiveCurrentTrack } from '../../actions/current_track_actions';


const msp = (state, ownProps) => {
    debugger
    return { 
        // tracks: Object.values(state.entities.tracks) || [] 
    }
};


const mdp = dispatch => {
    debugger
    // fetchTracks: () => dispatch(fetchTracks()),
    // receiveCurrentTrack: track => dispatch(receiveCurrentTrack(track))
    return { 
    }
};

export default connect(msp, mdp)(TrackCommentIndex);