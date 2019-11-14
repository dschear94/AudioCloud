import {
    RECEIVE_ARTIST,
    RECEIVE_ARTISTS,
} from '../actions/artist_actions';

const artistsReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_ARTIST:
            return Object.assign({}, state, {[action.artist.username]: action.artist});
        case RECEIVE_ARTISTS:
            return Object.assign({}, state, action.artists);
        default:
            return state;
    }
};

export default artistsReducer;
