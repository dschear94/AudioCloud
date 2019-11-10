export const createRecentPlay = recentPlay => {
    return $.ajax({
        method: 'POST',
        url: `/api/recent_plays`,
        data: {
            recent_play: recentPlay
        }
    })
}