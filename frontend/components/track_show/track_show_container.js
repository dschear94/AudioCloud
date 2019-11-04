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
    createLikedTrack,
    fetchLikedTracks,
    deleteLikedTrack,
 } from '../../actions/liked_track_actions'


const msp = (state, ownProps) => {

    const showTrack = ownProps.location.state ?
        ownProps.location.state.track :
        state.entities.artists.tracks ?
        state.entities.artists.tracks[ownProps.match.params.track] : {};
        
    return { 
        track: showTrack,
        author_id: state.session.id,
        likedTracks: state.entities.likedTracks.byTrackId || {}
    }

};


const mdp = dispatch => ({
    sendTrack: track => dispatch(receiveCurrentTrack(track)),
    fetchArtist: artist => dispatch(fetchArtist(artist)),

    createComment: comment => dispatch(createComment(comment)),
    fetchTrackComments: (trackId) => dispatch(fetchTrackComments(trackId)),
    clearComments: () => dispatch(clearComments()),

    // clearLikes: () => dispatch(clearLikes()),
    createLikedTrack: likedTrack => dispatch(createLikedTrack(likedTrack)),
    deleteLikedTrack: likedTrackId => dispatch(deleteLikedTrack(likedTrackId)),
    fetchLikedTracks: userId => dispatch(fetchLikedTracks(userId))
});

export default connect(msp, mdp)(TrackShow);