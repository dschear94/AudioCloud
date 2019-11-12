export const fetchTracks = () => {
    return $.ajax({
        method: 'GET',
        url: '/api/tracks'
    });
}

export const fetchTracksByFollows = userId => {
    return $.ajax({
        method: 'GET',
        url: `/api/tracks/by_follows/${userId}`
    });
}

export const fetchTracksByLikes = userId => {
    return $.ajax({
        method: 'GET',
        url: `/api/tracks/by_likes/${userId}`
    });
}

export const fetchTracksByArtist = artistId => {
    return $.ajax({
        method: 'GET',
        url: `/api/tracks/by_artist/${artistId}`,
    });
}

export const fetchTracksByRecentPlays = artistId => {
    return $.ajax({
        method: 'GET',
        url: `/api/tracks/by_recent_plays/${artistId}`,
    });
}
// export const fetchTrack = () => {
//     return $.ajax({
//         method: 'GET',
//         url: '/api/tracks'
//     });
// }

export const uploadTrack = track => {
    return $.ajax({
        method: 'POST',
        url: `/api/tracks`,
        data: track,
        contentType: false,
        processData: false
    })
}

export const updateTrackPlays = track => {
    return $.ajax({
        method: 'PATCH',
        url: `/api/tracks/update_plays/${track.id}`,
    })
}