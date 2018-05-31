import axios from 'axios';

const API_ROOT = 'https://mysterious-reef-29460.herokuapp.com/api/v1';

export const httpRequest = (url, method = 'GET', data) => {
  const headers = {
    'Content-Type': 'application/json'
  };

  return axios({
    method,
    url: `${API_ROOT}/${url}`,
    data,
    headers
  });
};

export const checkResponse = response => {
  if (response.data.status === 'ok') {
    return true;
  } else if (response.data.message) {
    const message = response.data.message.split('_').join(' ');
    throw new Error(message);
  }
  throw new Error('Something wrong');
};
