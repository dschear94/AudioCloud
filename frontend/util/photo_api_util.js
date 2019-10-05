export const fetchPhotos = () => {
    return $.ajax({
        method: 'GET',
        url: '/api/photos',
    });
}