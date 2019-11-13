import * as APIUtil from '../util/artist_api_util';




export const RECEIVE_ARTISTS = 'RECEIVE_ARTISTS';
export const RECEIVE_ARTIST = 'RECEIVE_ARTIST';


export const receiveArtists = (artists) => {
    return {
        type: RECEIVE_ARTISTS,
        artists
    }
};

export const receiveArtist = artist => {
    return {
        type: RECEIVE_ARTIST,
        artist
    }
};

export const fetchArtists = () => dispatch => {
    return APIUtil.fetchArtists().then(artists => (
        dispatch(receiveArtists(artists))
    ));
};

export const fetchArtist = (artist) => dispatch => {
    return APIUtil.fetchArtist(artist).then(artist => (
        dispatch(receiveArtist(artist))
    ));
};

export const fetchArtistsByTrackComments = trackId => dispatch => {
    return APIUtil.fetchArtistsByTrackComments(trackId).then(artists => (
        dispatch(receiveArtists(artists))
    ));
}