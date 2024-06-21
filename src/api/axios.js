import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:4000/v1/',
  withCredentials: true,
});

export default instance;
