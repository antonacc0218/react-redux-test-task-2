import { httpRequest } from '../services/httpService';

export const logIn = (data, failCb) => (dispatch) => (
  httpRequest('https://mysterious-reef-29460.herokuapp.com/api/v1/validate', 'POST', data)
    .then(res => res.data)
    .then(res => {
      dispatch({
        type: 'AUTHORIZATION_SUCCESS',
        payload: res.data.id
      });
    })
    .catch(err => {
      dispatch({
        type: 'AUTHORIZATION_FAIL',
        payload: err,
        error: true
      });
      failCb();
    })
);
