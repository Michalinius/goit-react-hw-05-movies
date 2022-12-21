import axios from "axios";

const API_KEY = `248e8290b0e557773220f75ff679d721`;

export const getTrending = async () => {
    const movies = await axios.get(`https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}`)
    return movies.data
}

export const getMovieByQuery = async (query) => {
    const movies = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&page=1&query=${query}&include_adult=true`)
    return movies.data
}

export const getMovieDetails = async (id) => {
    const movies = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US}`)
    return movies.data
}

export const getMovieCredits = async (id) => {
    const movies = await axios.get(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=${API_KEY}&language=en-US`)
    return movies.data
}

export const getMovieReviews = async (id) => {
    const movies = await axios.get(`https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${API_KEY}&language=en-US&page=1`)
    return movies.data
}