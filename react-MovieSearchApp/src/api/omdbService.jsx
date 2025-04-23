
const API_KEY = '7ad8d066'; 


const BASE_URL = 'https://www.omdbapi.com/';

export const searchMovies = async (query, type = '', page = 1) => {
  const url = `${BASE_URL}?apikey=${API_KEY}&s=${query}&type=${type}&page=${page}`;
  const res = await fetch(url);
  const data = await res.json();
  return data;
  // return await res.json();
};

export const getMovieDetails = async (id) => {
  const url = `${BASE_URL}?apikey=${API_KEY}&i=${id}&plot=full`;
  const res = await fetch(url);
  // return await res.json();
  const data = await res.json();
  return data;
};
