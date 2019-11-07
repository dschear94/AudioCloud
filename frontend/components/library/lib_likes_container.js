import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import LibLikes from './lib_likes';
import {
    fetchTracks,
    fetchTracksByArtist
} from '../../actions/track_actions';
import { receiveCurrentTrack } from '../../actions/current_track_actions';
import {
    fetchArtist
} from '../../actions/artist_actions'


const msp = (state, ownProps) => {
    let artist = ownProps.match.params.artist ?
        ownProps.match.params.artist :
        state.entities.artists ?
            state.entities.artists.username : "";

    return {
        artistName: artist || "",
        currentUser: Object.values(state.entities.users)[0] || {},
        artist: state.entities.artists[artist] || {},
    }

};


const mdp = dispatch => ({
    fetchArtist: artist => dispatch(fetchArtist(artist)),
    fetchTracksByArtist: artistId => dispatch(fetchTracksByArtist(artistId)),
});

export default withRouter(connect(msp, mdp)(LibLikes));