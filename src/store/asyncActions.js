import * as action from 'actionCreators';
import { mapUserInfo } from '../mapper';
import { httpRequest } from '../services/httpService';

const URL = 'https://mysterious-reef-29460.herokuapp.com/api/v1';

const checkResponse = response => {
  if (response.data.status === 'ok') {
    return true;
  } else if (response.data.message) {
    const message = response.data.message.split('_').join(' ');
    throw new Error(message);
  }
  throw new Error('Something wrong');
};

// TODO divide actions by modules
export const logIn = (data, failCb) => dispatch => {
  dispatch(action.authorizationRequest());
  httpRequest(`${URL}/validate`, 'POST', data)
    .then(res => {
      if (checkResponse(res)) {
        dispatch(action.authorizationSuccess(res.data.data.id));
      }
    })
    .catch(err => {
      failCb();
      dispatch(action.authorizationFail(err));
      dispatch(action.notificationErrorAdd(err.message));
    });
};

export const getUserInfo = (id) => dispatch => {
  dispatch(action.userInfoFetchRequest());
  httpRequest(`${URL}/user-info/${id}`)
    .then(res => {
      if (checkResponse(res)) {
        const userInfo = mapUserInfo(res.data.data);
        dispatch(action.userInfoFetchSuccess(userInfo));
      }
    })
    .catch(err => {
      dispatch(action.userInfoFetchFail(err));
      dispatch(action.notificationErrorAdd(err.message));
    });
};

export const getNews = () => dispatch => {
  dispatch(action.newsFetchRequest());
  httpRequest(`${URL}/news`)
    .then(res => {
      if (checkResponse(res)) {
        dispatch(action.newsFetchSuccess(res.data.data));
      }
    })
    .catch(err => {
      dispatch(action.newsFetchFail(err));
      dispatch(action.notificationErrorAdd(err.message));
    });
};

