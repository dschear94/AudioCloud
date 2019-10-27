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