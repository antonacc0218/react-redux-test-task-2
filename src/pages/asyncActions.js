import { httpRequest } from '../services/httpService';
import { mapUserInfo } from '../mapper.js';
import * as action from './../store/actionCreator';

const URL = 'https://mysterious-reef-29460.herokuapp.com/api/v1';

export const logIn = (data, failCb) => dispatch => {
  dispatch(action.authorizationRequest());
  httpRequest(`${URL}/validate`, 'POST', data)
    .then(res => res.data)
    .then(res => {
      dispatch(action.authorizationSuccess(res.data.id));
    })
    .catch(err => {
      failCb();
      dispatch(action.authorizationFail(err));
    });
};

export const getUserInfo = (id) => dispatch => {
  dispatch(action.userInfoFetchRequest());
  httpRequest(`${URL}/user-info/${id}`)
    .then(res => {
      dispatch(action.userInfoFetchSuccess(mapUserInfo(res.data.data)));
    })
    .catch(err => {
      dispatch(action.userInfoFetchFail(err));
    });
};

export const getNews = () => dispatch => {
  dispatch(action.newsFetchRequest());
  httpRequest(`${URL}/news`)
    .then(res => {
      dispatch(action.newsFetchSuccess(res.data.data));
    })
    .catch(err => {
      dispatch(action.newsFetchFail(err));
    });
};
