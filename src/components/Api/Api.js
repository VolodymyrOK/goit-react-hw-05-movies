import axios from 'axios';

const LANGUAGE = 'ru-Ru';
axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
axios.defaults.params = { language: LANGUAGE };
axios.defaults.headers.common['Authorization'] =
  'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNzZiYzAzYWRlYzkxZjM4NDYyM2VhNzVjMGE2YzY4OSIsInN1YiI6IjY1MDM1Y2U2NmEyMjI3MDBlMGYzOWYxMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.k3BEOH4kW2A89EtpujxHaG2LoxYnOWcrck6IHlG-nxs';
axios.defaults.headers.post['Content-Type'] = 'application/json';

export const fetchMovies = async page => {
  const params = new URLSearchParams({
    page: page,
  });
  const resp = await axios.get('trending/movie/day', { params });
  return resp.data;
};

export const fetchMovieId = async movieId => {
  const resp = await axios.get(`movie/${movieId}`);
  return resp.data;
};

export const fetchMovieQuery = async (keyWord, page) => {
  const params = new URLSearchParams({
    query: keyWord,
    page: page,
  });
  const resp = await axios.get(`search/movie`, { params });
  return resp.data;
};

export const fetchMovieCast = async movieId => {
  const resp = await axios.get(`movie/${movieId}/credits`);
  return resp.data;
};

export const fetchMovieReviews = async movieId => {
  const resp = await axios.get(`movie/${movieId}/reviews`);
  return resp.data;
};
