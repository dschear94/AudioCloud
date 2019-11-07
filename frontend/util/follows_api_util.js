export const fetchFollows = (userId) => {
    return $.ajax({
        method: 'GET',
        url: '/api/follows',
        data: {
            follow: {
                follower_id: userId
            }
        }
    });
}

export const createFollow = follow => {
    return $.ajax({
        method: 'POST',
        url: `/api/follows`,
        data: {
            follow: follow
        }
    })
}

export const deleteFollow = followId => {
    return $.ajax({
        method: 'DELETE',
        url: `/api/follows/${followId}`,
    })
}