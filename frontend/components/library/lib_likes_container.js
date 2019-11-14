import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import LibLikes from './lib_likes';
import {
    fetchTracksByArtist,
    fetchTracksByLikes,
    fetchTracksByRecentPlays,
    fetchTrack
} from '../../actions/track_actions';
import { updateTrackPlays } from '../../actions/current_track_actions';
import {
    fetchArtist
} from '../../actions/artist_actions'
import {
    selectTracksByArtist,
    selectTracksByLikes,
    getCurrentUser,
    getCurrentTrack,
    getCurrentTrackId,
    selectTracksByRecentPlays
} from '../../reducers/selectors'
import { playTrack, pauseTrack } from '../../actions/play_status_actions'
import {
    createLike,
    fetchLikes,
    deleteLike,
} from '../../actions/likes_actions'


const msp = (state, ownProps) => {

    let currentUser = getCurrentUser(state);
    let currentTrackId = getCurrentTrackId(state);
    let likedTracks = selectTracksByLikes(state, currentUser);
    const trackStatus = state.ui.playStatus;
    const recentPlays = selectTracksByRecentPlays(state, currentUser);

    return {
        currentUser: currentUser,
        likedTracks: likedTracks,
        currentTrackId: currentTrackId,
        trackStatus: trackStatus,
        recentPlays: recentPlays
    }

};


const mdp = dispatch => ({
    fetchArtist: artist => dispatch(fetchArtist(artist)),
    fetchTracksByArtist: artistId => dispatch(fetchTracksByArtist(artistId)),
    fetchTracksByLikes: artistId => dispatch(fetchTracksByLikes(artistId)),
    fetchTracksByRecentPlays: artistId => dispatch(fetchTracksByRecentPlays(artistId)),

    updateTrackPlays: track => dispatch(updateTrackPlays(track)),
    pauseTrack: () => dispatch(pauseTrack()),
    playTrack: () => dispatch(playTrack()),
    createLike: like => dispatch(createLike(like)),
    deleteLike: like => dispatch(deleteLike(like)),
    fetchLikes: userId => dispatch(fetchLikes(userId)),
    fetchTrack: (trackId) => dispatch(fetchTrack(trackId)),
});

export default withRouter(connect(msp, mdp)(LibLikes));