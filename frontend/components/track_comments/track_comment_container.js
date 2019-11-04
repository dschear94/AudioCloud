import { connect } from 'react-redux';
import TrackCommentIndex from './track_comment_index';
import { 
    fetchComments,
    fetchTrackComments,
    clearComments
} from '../../actions/comment_actions';


const msp = (state, ownProps) => {
    return { 
        comments: Object.values(state.entities.comments) || [] 
    }
};


const mdp = dispatch => {
    return { 
        fetchComments: () => dispatch(fetchComments()),
        fetchTrackComments: trackId => dispatch(fetchTrackComments(trackId)),
        clearComments: () => dispatch(clearComments())
    }
};

export default connect(msp, mdp)(TrackCommentIndex);