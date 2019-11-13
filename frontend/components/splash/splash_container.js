import { connect } from 'react-redux';
import { openModal } from '../../actions/modal_actions';
import Splash from './splash';
import {fetchTracks} from '../../actions/track_actions';
import { updateTrackPlays } from '../../actions/current_track_actions';
import { playTrack, pauseTrack } from '../../actions/play_status_actions';
import { getCurrentTrackId } from '../../reducers/selectors';


const msp = state => {
    const currentTrackId = getCurrentTrackId(state);
    const trackStatus = state.ui.playStatus;

    return { 
        tracks: Object.values(state.entities.tracks) || [],
        currentUser: (state.session.id ? true : false),
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
    })
};

export default connect(msp, mdp)(Splash);