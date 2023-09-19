import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
axios.defaults.headers.common['Authorization'] =
  'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNzZiYzAzYWRlYzkxZjM4NDYyM2VhNzVjMGE2YzY4OSIsInN1YiI6IjY1MDM1Y2U2NmEyMjI3MDBlMGYzOWYxMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.k3BEOH4kW2A89EtpujxHaG2LoxYnOWcrck6IHlG-nxs';
axios.defaults.headers.post['Content-Type'] = 'application/json';
const LANGUAGE = 'en-US';

export const fetchMovies = async () => {
  const params = new URLSearchParams({
    language: LANGUAGE,
  });
  const resp = await axios.get('trending/movie/day', { params });
  return resp.data;
};

export const fetchMovieId = async movieId => {
  const params = new URLSearchParams({
    language: LANGUAGE,
  });
  const resp = await axios.get(`movie/${movieId}`, { params });
  return resp.data;
};

export const fetchMovieQuery = async keyWord => {
  const params = new URLSearchParams({
    language: LANGUAGE,
    query: keyWord,
  });
  const resp = await axios.get(`search/movie`, { params });
  return resp.data;
};

export const fetchMovieCast = async movieId => {
  const params = new URLSearchParams({
    language: LANGUAGE,
  });
  const resp = await axios.get(`movie/${movieId}/credits`, { params });
  return resp.data;
};

export const fetchMovieReviews = async movieId => {
  const params = new URLSearchParams({
    language: LANGUAGE,
  });
  const resp = await axios.get(`movie/${movieId}/reviews`, { params });
  return resp.data;
};
