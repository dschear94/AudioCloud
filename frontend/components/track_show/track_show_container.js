import { connect } from 'react-redux';
import TrackShow from './track_show';
import { updateTrackPlays } from '../../actions/current_track_actions';
import { playTrack, pauseTrack } from '../../actions/play_status_actions'
import { fetchArtist, fetchArtistsByTrackComments } from '../../actions/artist_actions';

import {
    fetchTracks,
    fetchTracksByArtist
} from '../../actions/track_actions';

import { 
    createComment,
    fetchTrackComments,
    clearComments,
    deleteComment
 } from '../../actions/comment_actions';

 import {
    createLike,
    fetchLikes,
    deleteLike,
 } from '../../actions/likes_actions'

 import { 
    selectLikesByTrackId,
    getCurrentUser,
    getTrackByPath,
    getCurrentTrackId,
} from '../../reducers/selectors';


const msp = (state, ownProps) => {

    const trackFromOwnProps = ownProps.location.state ? ownProps.location.state.track : null;
    const trackFromPath = getTrackByPath(state, ownProps.match.params.artist, ownProps.match.params.track);

    const showTrack = trackFromOwnProps || trackFromPath || {};

    const currentUser = getCurrentUser(state);
    let currentTrackId = getCurrentTrackId(state);
    const trackStatus = state.ui.playStatus;

    return { 
        track: showTrack,
        currentUser: currentUser,
        currentTrackId: currentTrackId,
        trackStatus: trackStatus,
        artists: state.entities.artists
    }

};


const mdp = dispatch => ({
    updateTrackPlays: track => dispatch(updateTrackPlays(track)),
    pauseTrack: () => dispatch(pauseTrack()),
    playTrack: () => dispatch(playTrack()),
    fetchArtist: artist => dispatch(fetchArtist(artist)),
    fetchArtistsByTrackComments: trackId => dispatch(fetchArtistsByTrackComments(trackId)),

    fetchTracksByArtist: artistId => dispatch(fetchTracksByArtist(artistId)),

    createComment: comment => dispatch(createComment(comment)),
    fetchTrackComments: (trackId) => dispatch(fetchTrackComments(trackId)),
    clearComments: () => dispatch(clearComments()),
    deleteComment: commentId => dispatch(deleteComment(commentId)),
    

    // clearLikes: () => dispatch(clearLikes()),
    createLike: like => dispatch(createLike(like)),
    deleteLike: like => dispatch(deleteLike(like)),
    fetchLikes: userId => dispatch(fetchLikes(userId))
});

export default connect(msp, mdp)(TrackShow);