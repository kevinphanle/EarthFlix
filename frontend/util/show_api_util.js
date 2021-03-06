export const fetchShows = () => {
    return $.ajax({
        method: "GET",
        url: '/api/shows'
    });
};

export const fetchShow = (id) => {
    return $.ajax({
        method: "GET",
        url: `api/shows/${id}`
    });
}


export const fetchVideo = (id) => {
    return $.ajax({
        method: "GET",
        url: `api/videos/${id}`
    })
}