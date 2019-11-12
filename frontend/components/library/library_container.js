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
    getCurrentTrackId
} from '../../reducers/selectors';
import { playTrack, pauseTrack } from '../../actions/play_status_actions'


const msp = (state, ownProps) => {
    let artist = ownProps.match.params.artist ?
        ownProps.match.params.artist :
        state.entities.artists ?
            state.entities.artists.username : "";

    const currentTrackId = getCurrentTrackId(state);
    const trackStatus = state.ui.playStatus;

    return {
        artistName: artist || "",
        currentUser: Object.values(state.entities.users)[0] || {},
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
});

export default withRouter(connect(msp, mdp)(Library));