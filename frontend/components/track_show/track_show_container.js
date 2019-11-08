import { connect } from 'react-redux';
import TrackShow from './track_show';
import { fetchTracks } from '../../actions/track_actions';
import { receiveCurrentTrack } from '../../actions/current_track_actions';
import { fetchArtist } from '../../actions/artist_actions';

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

 import { selectLikesByTrackId } from '../../reducers/selectors';


const msp = (state, ownProps) => {

    const showTrack = ownProps.location.state ?
        ownProps.location.state.track :
        state.entities.artists[ownProps.match.params.artist] ?
        state.entities.artists[ownProps.match.params.artist].tracks[ownProps.match.params.track] : {};

    return { 
        track: showTrack,
        author_id: state.session.id,
        likes: selectLikesByTrackId(state, showTrack.id) || {},
    }

};


const mdp = dispatch => ({
    sendTrack: track => dispatch(receiveCurrentTrack(track)),
    fetchArtist: artist => dispatch(fetchArtist(artist)),

    createComment: comment => dispatch(createComment(comment)),
    fetchTrackComments: (trackId) => dispatch(fetchTrackComments(trackId)),
    clearComments: () => dispatch(clearComments()),

    // clearLikes: () => dispatch(clearLikes()),
    createLike: like => dispatch(createLike(like)),
    deleteLike: likeId => dispatch(deleteLike(likeId)),
    fetchLikes: userId => dispatch(fetchLikes(userId))
});

export default connect(msp, mdp)(TrackShow);