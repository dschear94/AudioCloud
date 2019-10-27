import { connect } from 'react-redux';
import TrackShow from './track_show';
import { fetchTracks } from '../../actions/track_actions';
import { receiveCurrentTrack } from '../../actions/current_track_actions';
import { fetchArtist } from '../../actions/artist_actions';


const msp = (state, ownProps) => {
    return { 
        track: ownProps.location.state ? 
        ownProps.location.state.track : {} 
    }
};


const mdp = dispatch => ({
    sendTrack: track => dispatch(receiveCurrentTrack(track)),
    fetchArtist: artist => dispatch(fetchArtist(artist))
});

export default connect(msp, mdp)(TrackShow);