import { connect } from 'react-redux';
import TrackShow from './track_show';
import { receiveCurrentTrack } from '../../actions/current_track_actions';
import { fetchArtist } from '../../actions/artist_actions';

import {
    fetchTracks,
    fetchTracksByArtist
} from '../../actions/track_actions';

import { 
    createComment,
    fetchTrackComments,
    clearComments
 } from '../../actions/comment_actions';

 import {
    createLike,
    fetchLikes,
    deleteLike,
 } from '../../actions/likes_actions'

 import { 
    selectLikesByTrackId,
    getCurrentUser,
    getTrackByPath
} from '../../reducers/selectors';


const msp = (state, ownProps) => {

    const trackFromOwnProps = ownProps.location.state ? ownProps.location.state.track : null;
    const trackFromPath = getTrackByPath(state, ownProps.match.params.artist, ownProps.match.params.track);

    const showTrack = trackFromOwnProps || trackFromPath || {};

    const currentUser = getCurrentUser(state);

    return { 
        track: showTrack,
        currentUser: currentUser,
    }

};


const mdp = dispatch => ({
    sendTrack: track => dispatch(receiveCurrentTrack(track)),
    fetchArtist: artist => dispatch(fetchArtist(artist)),

    fetchTracksByArtist: artistId => dispatch(fetchTracksByArtist(artistId)),

    createComment: comment => dispatch(createComment(comment)),
    fetchTrackComments: (trackId) => dispatch(fetchTrackComments(trackId)),
    clearComments: () => dispatch(clearComments()),

    // clearLikes: () => dispatch(clearLikes()),
    createLike: like => dispatch(createLike(like)),
    deleteLike: likeId => dispatch(deleteLike(likeId)),
    fetchLikes: userId => dispatch(fetchLikes(userId))
});

export default connect(msp, mdp)(TrackShow);