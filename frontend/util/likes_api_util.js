// export const fetchLikes = () => {
//     return $.ajax({
//         method: 'GET',
//         url: '/api/likes'
//     });
// }

export const fetchLikedTracks = (userId) => {
    return $.ajax({
        method: 'GET',
        url: '/api/Likes',
        data: {
            like: {
                track_id: trackId
            }
        }
    });
}

// export const fetchUserLikes = (userId) => {
//     return $.ajax({
//         method: 'GET',
//         url: '/api/likes',
//         data: {
//             like: {
//                 user_id: userId
//             }
//         }
//     });
// }

export const createLikedTrack = likedTrack => {
    return $.ajax({
        method: 'POST',
        url: `/api/likes`,
        data: {
            like: likedTrack
        }
    })
}

export const deleteLikedTrack = likeId => {
    return $.ajax({
        method: 'DELETE',
        url: `/api/likes/${likeId}`,
    })
}