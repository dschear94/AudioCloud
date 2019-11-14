import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Library from './library';
import {
    fetchTracks,
    fetchTracksByArtist
} from '../../actions/track_actions';
import { updateTrackPlays } from '../../actions/current_track_actions';
import {
    fetchArtist
} from '../../actions/artist_actions';
import {
    getCurrentTrackId,
    getCurrentUser,
} from '../../reducers/selectors';
import { playTrack, pauseTrack } from '../../actions/play_status_actions'
import {
    createLike,
    fetchLikes,
    deleteLike,
} from '../../actions/likes_actions'


const msp = (state, ownProps) => {
    let artist = ownProps.match.params.artist ?
        ownProps.match.params.artist :
        state.entities.artists ?
            state.entities.artists.username : "";

    const currentTrackId = getCurrentTrackId(state);
    const trackStatus = state.ui.playStatus;
    let currentUser = getCurrentUser(state);

    return {
        artistName: artist || "",
        currentUser: currentUser,
        artist: state.entities.artists[artist] || {},
        currentTrackId: currentTrackId,
        trackStatus: trackStatus,
    }

};


const mdp = dispatch => ({
    fetchArtist: artist => dispatch(fetchArtist(artist)),
    fetchTracksByArtist: artistId => dispatch(fetchTracksByArtist(artistId)),
    
    updateTrackPlays: track => dispatch(updateTrackPlays(track)),
    pauseTrack: () => dispatch(pauseTrack()),
    playTrack: () => dispatch(playTrack()),
    createLike: like => dispatch(createLike(like)),
    deleteLike: like => dispatch(deleteLike(like)),
    fetchLikes: userId => dispatch(fetchLikes(userId))
});

export default withRouter(connect(msp, mdp)(Library));