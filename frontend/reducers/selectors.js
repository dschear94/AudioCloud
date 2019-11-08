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

export const getCurrentUser = state => {
    return Object.assign({}, Object.values(state.entities.users)[0]);
}


export const getTrackByPath = (state, artistName, trackTitle) => {

    let track;

        Object.values(state.entities.tracks).forEach(trackObj => {
            if (trackObj.artist === artistName && trackObj.title === trackTitle) {
                return track = trackObj;
            }
        }) 


    return track;
}