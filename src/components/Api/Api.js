import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
axios.defaults.headers.common['Authorization'] =
  'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNzZiYzAzYWRlYzkxZjM4NDYyM2VhNzVjMGE2YzY4OSIsInN1YiI6IjY1MDM1Y2U2NmEyMjI3MDBlMGYzOWYxMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.k3BEOH4kW2A89EtpujxHaG2LoxYnOWcrck6IHlG-nxs';
axios.defaults.headers.post['Content-Type'] = 'application/json';
const BASE_URL = 'https://api.themoviedb.org/3/';
const API_KEY = 'd76bc03adec91f384623ea75c0a6c689';
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
  const resp = await axios.get(
    `${BASE_URL}search/movie?api_key=${API_KEY}&query=${keyWord}&language=${LANGUAGE}`
  );
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
