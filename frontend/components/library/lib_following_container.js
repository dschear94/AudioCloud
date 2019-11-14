import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import LibFollowing from './lib_following';
import {
    fetchTracks,
    fetchTracksByArtist
} from '../../actions/track_actions';
import { updateTrackPlays } from '../../actions/current_track_actions';
import {
    fetchArtist,
    fetchArtistsByFollows,
} from '../../actions/artist_actions'
import {
    getCurrentUser,
    selectTracksByFollows,
    getCurrentTrackId,
    getArtistsByFollows
} from '../../reducers/selectors';


const msp = (state, ownProps) => {
    let artist = ownProps.match.params.artist ?
        ownProps.match.params.artist :
        state.entities.artists ?
            state.entities.artists.username : "";

    let currentUser = getCurrentUser(state);
    let artists = getArtistsByFollows(state, currentUser)

    return {
        artistName: artist || "",
        currentUser: currentUser,
        artists: artists,
    }

};


const mdp = dispatch => ({
    fetchArtist: artist => dispatch(fetchArtist(artist)),
    fetchTracksByArtist: artistId => dispatch(fetchTracksByArtist(artistId)),
    fetchArtistsByFollows: userId => dispatch(fetchArtistsByFollows(userId)),
});

export default withRouter(connect(msp, mdp)(LibFollowing));