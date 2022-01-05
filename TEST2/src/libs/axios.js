import axios from 'axios';

const axiosAPI = axios.create({
  baseURL: 'https://run.mocky.io/v3/',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json'
  }
});

axiosAPI.interceptors.response.use(function (response) {
  return response.data;
}, function (error) {
  return Promise.reject(error);
});

export default axiosAPI;