export const fetchArtist = artist => {
    return $.ajax({
        method: 'GET',
        url: `/api/artists/${artist}`
    });
}

export const fetchArtists = () => {
    return $.ajax({
        method: 'GET',
        url: `/api/artists`
    });
}

export const fetchArtistsByTrackComments = (trackId) => {
    return $.ajax({
        method: 'GET',
        url: `/api/artists/by_track_comments/${trackId}`
    });
}

export const fetchArtistsByFollows = (userId) => {
    return $.ajax({
        method: 'GET',
        url: `/api/artists/by_follows/${userId}`
    });
}