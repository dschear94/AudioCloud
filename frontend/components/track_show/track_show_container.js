import { connect } from 'react-redux';
import TrackShow from './track_show';
import { fetchTracks } from '../../actions/track_actions';
import { receiveCurrentTrack } from '../../actions/current_track_actions';


const msp = (state, ownProps) => {
    debugger

    return { 
        track: ownProps.location.state ? 
        ownProps.location.state.track : {} 
    }
};


const mdp = dispatch => ({
    sendTrack: track => dispatch(receiveCurrentTrack(track))
});

export default connect(msp, mdp)(TrackShow);