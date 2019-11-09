import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import LibOverview from './lib_overview';
import {
    fetchTracks,
    fetchTracksByArtist,
    fetchTracksByLikes
} from '../../actions/track_actions';
import { updateTrackPlays } from '../../actions/current_track_actions';
import {
    fetchArtist
} from '../../actions/artist_actions'
import { 
    selectTracksByArtist,
    selectTracksByLikes,
    getCurrentUser
} from '../../reducers/selectors'


const msp = (state, ownProps) => {

    let artist = ownProps.match.params.artist ?
        ownProps.match.params.artist :
        state.entities.artists ?
        state.entities.artists.username : "";
    
    let currentUser = getCurrentUser(state);

    return {
        artistName: artist || "",
        currentUser: currentUser,
        artist: state.entities.artists[artist] || {},
        // tracks: selectTracksByArtist(state, artist),
        likedTracks: selectTracksByLikes(state, currentUser),
    }

};


const mdp = dispatch => ({
    fetchArtist: artist => dispatch(fetchArtist(artist)),
    fetchTracksByArtist: artistId => dispatch(fetchTracksByArtist(artistId)),
    fetchTracksByLikes: artistId => dispatch(fetchTracksByLikes(artistId)),

    updateTrackPlays: track => dispatch(updateTrackPlays(track)),
});

export default withRouter(connect(msp, mdp)(LibOverview));