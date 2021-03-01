import axiosInstance from './axios/axiosInstance';

const post = (url, body) => {
  return axiosInstance.post(url, body).catch(error => handleError(error));
};
const get = url => {
  return axiosInstance
    .get(url, defaultApiConfig)
    .catch(error => handleError(error));
};

export const Network = {
  post,
  get,
};
/************************ Api Config utils ****************************/
const defaultApiConfig = {
  headers: {
    'Content-Type': 'application/json',
  },
};
const handleError = error => {
  console.warn('***error***', error);
};
