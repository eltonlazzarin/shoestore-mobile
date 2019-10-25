import axios from 'axios';

const api = axios.create({
  baseURL: 'https://json-shoestore-heroku.herokuapp.com/',
});

export default api;
