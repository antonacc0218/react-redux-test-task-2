import { combineReducers } from 'redux';
import { newsReducer } from 'pages/News/reducers';
import { userInfoReducer } from 'pages/Profile/reducers';
import { userIdReducer } from 'pages/Login/reducers';
import * as type from './actionTypes';

// TODO where move ?
const userLoading = (state = false, action) => {
  switch (action.type) {
    case 'AUTHORIZATION_REQUEST':
    case 'USER_INFO_FETCH_REQUEST':
      return true;
    case 'AUTHORIZATION_SUCCESS':
    case 'AUTHORIZATION_FAIL':
    case 'USER_INFO_FETCH_SUCCESS':
    case 'USER_INFO_FETCH_FAIL':
      return false;
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
    id: userIdReducer,
    info: userInfoReducer,
    isLoading: userLoading
  }),
  news: newsReducer,
  notifications
});
