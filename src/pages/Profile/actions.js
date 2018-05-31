import { httpRequest, checkResponse } from 'helpers/network';
import * as action from 'actions';
import { mapUserInfo } from './mapper'; // TODO move other place
import * as t from './actionTypes';

export const userInfoFetchRequest = () => ({
  type: t.USER_INFO_FETCH_REQUEST
});

export const userInfoFetchSuccess = (data) => ({
  type: t.USER_INFO_FETCH_SUCCESS,
  payload: data
});

export const userInfoFetchFail = (error) => ({
  type: t.USER_INFO_FETCH_FAIL,
  payload: error,
  error: true
});

export const getUserInfo = (id) => dispatch => {
  dispatch(userInfoFetchRequest());
  httpRequest(`user-info/${id}`)
    .then(res => {
      if (checkResponse(res)) {
        const userInfo = mapUserInfo(res.data.data);
        dispatch(userInfoFetchSuccess(userInfo));
      }
    })
    .catch(err => {
      dispatch(userInfoFetchFail(err));
      dispatch(action.notificationErrorAdd(err.message));
    });
};
