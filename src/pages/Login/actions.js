import { httpRequest, checkResponse } from 'helpers/network';
import * as action from 'actions';
import * as t from './actionTypes';

export const authorizationRequest = () => ({
  type: t.AUTHORIZATION_REQUEST
});

export const authorizationSuccess = (id) => ({
  type: t.AUTHORIZATION_SUCCESS,
  payload: id
});

export const authorizationFail = (error) => ({
  type: t.AUTHORIZATION_FAIL,
  payload: error,
  error: true
});

export const signOut = () => ({
  type: t.SIGN_OUT
});

export const logIn = (data, failCb) => dispatch => {
  dispatch(authorizationRequest());
  httpRequest('validate', 'POST', data)
    .then(res => {
      if (checkResponse(res)) {
        dispatch(authorizationSuccess(res.data.data.id));
      }
    })
    .catch(err => {
      failCb();
      dispatch(authorizationFail(err));
      dispatch(action.notificationErrorAdd(err.message));
    });
};
