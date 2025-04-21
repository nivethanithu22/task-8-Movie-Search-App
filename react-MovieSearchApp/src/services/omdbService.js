const API_KEY = '7ad8d066';
const BASE_URL = 'https://www.omdbapi.com/';

export async function fetchMovies(query, page = 1, type = '') {
  const url = `${BASE_URL}?apikey=${API_KEY}&s=${query}&page=${page}${type ? `&type=${type}` : ''}`;
  const res = await fetch(url);
  const data = await res.json();
  return data;
}

export async function fetchMovieDetails(id) {
  const url = `${BASE_URL}?apikey=${API_KEY}&i=${id}&plot=full`;
  const res = await fetch(url);
  const data = await res.json();
  return data;
}