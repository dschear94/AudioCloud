export const fetchComments = () => {
    return $.ajax({
        method: 'GET',
        url: '/api/comments'
    });
}

export const fetchTrackComments = (trackId) => {
    return $.ajax({
        method: 'GET',
        url: '/api/comments',
        data: {
            comment: {
                track_id: trackId
            }
        }
    });
}

export const createComment = comment => {
    return $.ajax({
        method: 'POST',
        url: `/api/comments`,
        data: {
            comment: comment
        }
    })
}