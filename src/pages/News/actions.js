import { httpRequest, checkResponse } from 'helpers/network';
import * as action from 'actions';
import * as t from './actionTypes';

export const newsFetchRequest = () => ({
  type: t.NEWS_FETCH_REQUEST
});

export const newsFetchSuccess = (data) => ({
  type: t.NEWS_FETCH_SUCCESS,
  payload: data
});

export const newsFetchFail = (error) => ({
  type: t.NEWS_FETCH_FAIL,
  payload: error,
  error: true
});

export const getNews = () => dispatch => {
  dispatch(newsFetchRequest());
  httpRequest('news')
    .then(res => {
      if (checkResponse(res)) {
        dispatch(newsFetchSuccess(res.data.data));
      }
    })
    .catch(err => {
      dispatch(newsFetchFail(err));
      dispatch(action.notificationErrorAdd(err.message));
    });
};
