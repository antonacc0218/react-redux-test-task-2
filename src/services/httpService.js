import axios from 'axios';

export const httpRequest = (url, method = 'GET', data) => {
  const headers = {
    'Content-Type': 'application/json'
  };

  return axios({
    method,
    url,
    data,
    headers
  });
};
