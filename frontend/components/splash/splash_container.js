import { connect } from 'react-redux';
import { openModal } from '../../actions/modal_actions';
import Splash from './splash';
import {fetchTracks} from '../../actions/track_actions';
import { updateTrackPlays } from '../../actions/current_track_actions';
import { playTrack, pauseTrack } from '../../actions/play_status_actions';
import { 
    getCurrentTrackId,
    getCurrentUser, 
} from '../../reducers/selectors';
import {
    createLike,
    fetchLikes,
    deleteLike,
} from '../../actions/likes_actions'


const msp = state => {
    const currentTrackId = getCurrentTrackId(state);
    const trackStatus = state.ui.playStatus;
    let currentUser = getCurrentUser(state);

    return { 
        tracks: Object.values(state.entities.tracks) || [],
        currentUser: currentUser,
        currentTrackId: currentTrackId,
        trackStatus: trackStatus,
    };
};

const mdp = dispatch => {
    return ({
        fetchTracks: () => dispatch(fetchTracks()),
        openModal: modal => dispatch(openModal(modal)),
        updateTrackPlays: track => dispatch(updateTrackPlays(track)),
        pauseTrack: () => dispatch(pauseTrack()),
        playTrack: () => dispatch(playTrack()),
        createLike: like => dispatch(createLike(like)),
        deleteLike: like => dispatch(deleteLike(like)),
        fetchLikes: userId => dispatch(fetchLikes(userId))
    })
};

export default connect(msp, mdp)(Splash);