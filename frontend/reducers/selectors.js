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

export const getArtistsByFollows = (state, artistObj) => {
    let followings = [];

    artistObj.followings ? 
        Object.values(state.entities.artists).map(artist => 
            artist.username in artistObj.followings ? 
            followings.push(artist) : null
        ) : null;

    return followings
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

export const selectTracksByRecentPlays = (state, artistObj) => {
    let recentlyPlayedTracks = [];

    if (artistObj.recent_plays) {
        let sorted = Object.values(artistObj.recent_plays).sort((a, b) => (a.time > b.time) ? 1 : -1);
        sorted.forEach(recent_play =>
            Object.values(state.entities.tracks).forEach(track => {
                if (recent_play.data.track_id === track.id) {
                    recentlyPlayedTracks.push(track);
                }
            })
        )
    }

    return recentlyPlayedTracks;
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

// export const getCurrentTrack = state => {
//     if (!state.entities.currentTrack) return {};
//     debugger
//     return Object.assign({}, Object.values(state.entities.currentTrack.data));
// }

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




export const createCurrentTrackPlaying = track => {
    let currentTrack = {};
    currentTrack["data"] = Object.assign({}, Object.values(track)[0]);
    currentTrack["playing"] = true;
    return currentTrack;
}


export const createCurrentTrackPause = track => {
    let currentTrack = {};
    currentTrack["data"] = Object.assign({}, Object.values(track)[0]);
    currentTrack["playing"] = false;
    return currentTrack;
}