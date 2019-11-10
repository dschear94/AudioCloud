export const selectTracksByArtist = (state, artistName) => {

    let artistTracks = [];

    artistName ? 
    Object.values(state.entities.tracks).map(track => 
        track.artist === artistName ?
        artistTracks.push(track) : null)
    : [];

    return artistTracks;

}

export const selectTracksByLikes = (state, artistObj) => {
    let likedTracks = [];

    artistObj.likedTracks ? 
        Object.values(state.entities.tracks).map(track => 
            track.id in artistObj.likedTracks ? 
            likedTracks.push(track) : null
        ) : null;

    return likedTracks
}

export const selectTracksByFollows = (state, artistObj) => {
    let followedArtistTracks = [];

    artistObj.following ? 
        Object.values(state.entities.tracks).map(track => 
            track.artist in artistObj.following ? 
                followedArtistTracks.push(track) : null
        ) : null;

    return followedArtistTracks;
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

export const getCurrentTrack = state => {
    if (!state.entities.currentTrack) return {};
    return Object.assign({}, Object.values(state.entities.currentTrack)[0]);
}

export const getCurrentTrackId = state => {
    if (!state.entities.currentTrack) return null;
    return Object.assign({}, Object.values(state.entities.currentTrack)[0]).id;
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