import { connect } from 'react-redux';
import TrackShow from './track_show';
import { fetchTracks } from '../../actions/track_actions';
import { receiveCurrentTrack } from '../../actions/current_track_actions';


const msp = (state, ownProps) => {
    return state;
};


const mdp = dispatch => ({
    
});

export default connect(msp, mdp)(TrackShow);