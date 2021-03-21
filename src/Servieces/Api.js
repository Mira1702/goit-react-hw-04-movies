import axios from 'axios';

const key = '1f52abca7d472783260f83a60d04a4c4';
axios.defaults.baseURL = `https://api.themoviedb.org/3/`;


const getTrandingFilms = () => {
    return axios
        .get(`/trending/movie/day?api_key=${key}`)
        .then(response => response.data)
}

const getMovieDetails = (id) => {
    return axios
        .get(`/movie/${id}?api_key=${key}`)
        .then(response => response.data)
}

const getMoviesList = (searchQuery) => {
    return axios
        .get(`/search/movie?api_key=${key}&language=en-US&page=1&query=${searchQuery}`)
        .then(response => response.data)
}

export { getTrandingFilms, getMovieDetails, getMoviesList }