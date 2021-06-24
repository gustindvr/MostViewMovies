import axios from 'axios';

export const API = axios.create({
  baseURL: 'https://imdb-api.com/API/',
});
