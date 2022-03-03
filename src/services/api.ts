import axios from 'axios';

export const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

api.interceptors.response.use(
  config => {
    return config;
  },
  error => {
    if (error.message === 'Request failed with status code 401') {
      setTimeout(() => {
        localStorage.removeItem(`@${process.env.REACT_APP_NAME}:token`);
        localStorage.removeItem(`@${process.env.REACT_APP_NAME}:user`);
      });
    }
  },
);
