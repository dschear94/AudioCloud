export const selectTracksByArtist = (state, artistName) => {

    let artistTracks = [];

    artistName ? 
    Object.values(state.entities.tracks).map(track => 
        track.artist === artistName ?
        artistTracks.push(track) : null)
    : [];

    return artistTracks;

}

export const selectLikesByTrackId = (state, trackId) => {

    let trackLikes = {};

    Object.values(state.entities.likes).map(like =>
        like.id === trackId ?
        trackLikes[like.id] = like : null)
    ;

    return trackLikes;
    
}
