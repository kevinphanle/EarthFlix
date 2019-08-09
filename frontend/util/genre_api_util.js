export const fetchGenres = () => {
    return $.ajax({
        method: 'GET',
        url: '/api/genres'
    })
};