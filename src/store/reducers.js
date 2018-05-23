import { combineReducers } from 'redux';

import * as type from './actionCreator';

const userId = (state = null, action) => {
  switch (action.type) {
    case type.AUTHORIZATION_SUCCESS:
      return action.payload;
    case type.SIGN_OUT:
    case type.AUTHORIZATION_FAIL:
      return null;
    default:
      return state;
  }
};

const userInfo = (state = null, action) => {
  switch (action.type) {
    case type.USER_INFO_FETCH_SUCCESS:
      return action.payload;
    default:
      return state;
  }
};

const userLoading = (state = false, action) => {
  switch (action.type) {
    case type.AUTHORIZATION_REQUEST:
    case type.USER_INFO_FETCH_REQUEST:
      return true;
    case type.AUTHORIZATION_SUCCESS:
    case type.AUTHORIZATION_FAIL:
    case type.USER_INFO_FETCH_SUCCESS:
    case type.USER_INFO_FETCH_FAIL:
      return false;
    default:
      return state;
  }
};

const initNewsState = {
  list: [],
  isLoading: false
};

const news = (state = initNewsState, action) => {
  switch (action.type) {
    case type.NEWS_FETCH_REQUEST:
      return Object.assign({}, state, { isLoading: true });
    case type.NEWS_FETCH_SUCCESS:
      return Object.assign({}, state, { list: action.payload, isLoading: false });
    case type.NEWS_FETCH_FAIL:
      return Object.assign({}, state, { isLoading: false });
    default:
      return state;
  }
};

const notifications = (state = [], action) => {
  switch (action.type) {
    case type.NOTIFICATION_POSITIVE_ADD:
      return [...state, { value: action.payload }];
    case type.NOTIFICATION_ERROR_ADD:
      return [...state, { value: action.payload, isError: true }];
    case type.NOTIFICATION_REMOVE_BY_INDEX:
      return state.filter((el, index) => index !== action.payload);
    default:
      return state;
  }
};

export default combineReducers({
  user: combineReducers({
    id: userId,
    info: userInfo,
    isLoading: userLoading
  }),
  news,
  notifications
});
