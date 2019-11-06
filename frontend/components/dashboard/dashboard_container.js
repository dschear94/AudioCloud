import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Dashboard from './dashboard';
import { 
    fetchTracks,
    fetchTracksByArtist
} from '../../actions/track_actions';
import { receiveCurrentTrack } from '../../actions/current_track_actions';
import { openModal } from '../../actions/modal_actions';
import { 
    sendAvatar,
    clearAvatar,
    sendHeaderImage,
    clearHeaderImage
} from '../../actions/dashboardImageUpload_actions';
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
        currentUser: Object.values(state.entities.users)[0],
        artist: state.entities.artists[artist] || {},
    }
};


const mdp = dispatch => ({
    openModal: modal => dispatch(openModal(modal)),

    fetchArtist: artist => dispatch(fetchArtist(artist)),
    fetchTracksByArtist: artistId => dispatch(fetchTracksByArtist(artistId)),

    sendAvatar: avatar => dispatch(sendAvatar(avatar)),
    clearAvatar: () => dispatch(clearAvatar()),

    sendHeaderImage: headerImage => dispatch(sendHeaderImage(headerImage)),
    clearHeaderImage: () => dispatch(clearHeaderImage())
});

export default withRouter(connect(msp, mdp)(Dashboard));