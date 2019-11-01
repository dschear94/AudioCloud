import { connect } from 'react-redux';
import TrackCommentIndex from './track_comment_index';
import { 
    fetchComments,
    fetchTrackComments
} from '../../actions/comment_actions';


const msp = (state, ownProps) => {
    return { 
        comments: Object.values(state.entities.comments) || [] 
    }
};


const mdp = dispatch => {
    return { 
        fetchComments: () => dispatch(fetchComments()),
        fetchTrackComments: trackId => dispatch(fetchTrackComments(trackId))
    }
};

export default connect(msp, mdp)(TrackCommentIndex);