import axios from 'axios';

// Create your axios with credentials object
const BASE_URL = 'http://localhost:8000/api';
const axiosWithCredentials = axios.create({
  withCredentials: true,
  baseURL: BASE_URL
});

// Intercept the success and errors, if needed
axiosWithCredentials.interceptors?.response?.use(response => response, error => error);

export function test() {
  return new Promise(function(resolve, reject) {
    axiosWithCredentials.get('/test').then(res => {
      resolve(res);
    }).catch(error => {
      reject(error);
    });
  });
}
