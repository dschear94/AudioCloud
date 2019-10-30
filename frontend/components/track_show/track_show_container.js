import { connect } from 'react-redux';
import TrackShow from './track_show';
import { fetchTracks } from '../../actions/track_actions';
import { receiveCurrentTrack } from '../../actions/current_track_actions';
import { fetchArtist } from '../../actions/artist_actions';
import { createComment } from '../../actions/comment_actions';


const msp = (state, ownProps) => {
    const showTrack = ownProps.location.state ?
        ownProps.location.state.track 
        : state.entities.artists.tracks ?
        state.entities.artists.tracks[ownProps.match.params.track] : {}
    return { 
        track: showTrack
    }
};


const mdp = dispatch => ({
    sendTrack: track => dispatch(receiveCurrentTrack(track)),
    fetchArtist: artist => dispatch(fetchArtist(artist)),
    createComment: comment => dispatch(createComment(comment))
});

export default connect(msp, mdp)(TrackShow);