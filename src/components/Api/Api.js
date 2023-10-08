import axios from 'axios';

const LANGUAGE = 'en-Us';
axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
axios.defaults.params = { language: LANGUAGE };
axios.defaults.headers.common['Authorization'] =
  'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNzZiYzAzYWRlYzkxZjM4NDYyM2VhNzVjMGE2YzY4OSIsInN1YiI6IjY1MDM1Y2U2NmEyMjI3MDBlMGYzOWYxMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.k3BEOH4kW2A89EtpujxHaG2LoxYnOWcrck6IHlG-nxs';
axios.defaults.headers.post['Content-Type'] = 'application/json';

export const fetchMovies = async (page, { signal }) => {
  const params = new URLSearchParams({
    page: page,
  });
  const resp = await axios.get('trending/movie/day', { params, signal });
  return resp.data;
};

export const fetchMovieId = async (movieId, { signal }) => {
  const resp = await axios.get(`movie/${movieId}`, { signal });
  return resp.data;
};

export const fetchMovieQuery = async (keyWord, page, { signal }) => {
  const params = new URLSearchParams({
    query: keyWord,
    page: page,
  });
  const resp = await axios.get(`search/movie`, { params, signal });
  return resp.data;
};

export const fetchMovieCast = async (movieId, { signal }) => {
  const resp = await axios.get(`movie/${movieId}/credits`, { signal });
  return resp.data;
};

export const fetchMovieReviews = async (movieId, { signal }) => {
  const resp = await axios.get(`movie/${movieId}/reviews`, { signal });
  return resp.data;
};
