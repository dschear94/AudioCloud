export const fetchTracks = () => {
    return $.ajax({
        method: 'GET',
        url: '/api/tracks'
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