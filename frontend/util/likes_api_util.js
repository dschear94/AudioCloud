// export const fetchLikes = () => {
//     return $.ajax({
//         method: 'GET',
//         url: '/api/likes'
//     });
// }

export const fetchLikes = (trackId) => {
    return $.ajax({
        method: 'GET',
        url: '/api/likes',
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

export const createLike = like => {
    return $.ajax({
        method: 'POST',
        url: `/api/likes`,
        data: {
            like: like
        }
    })
}

export const deleteLike = like => {
    return $.ajax({
        method: 'PATCH',
        url: `/api/likes/pseudo_destroy`,
        data: { like }
    });
}


