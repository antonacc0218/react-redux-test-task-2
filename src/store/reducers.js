import { combineReducers } from 'redux';

import * as type from './actionCreator';

const user = (state = {}, action) => {
  switch (action.type) {
    case type.AUTHORIZATION_SUCCESS:
      return { isAuthorized: true, id: action.payload };
    case type.SIGN_OUT:
    case type.AUTHORIZATION_FAIL:
      return { isAuthorized: false };
    case type.USER_INFO_FETCH_SUCCESS:
      return Object.assign({}, state, { info: action.payload });
    default:
      return state;
  }
};

const isLoading = (state = false, action) => {
  switch (action.type) {
    case type.AUTHORIZATION_REQUEST:
      return true;
    case type.AUTHORIZATION_SUCCESS:
    case type.AUTHORIZATION_FAIL:
      return false;
    default:
      return state;
  }
};

const news = (state = [], action) => {
  switch (action.type) {
    case type.NEWS_FETCH_SUCCESS:
      return [...action.payload];
    default:
      return state;
  }
};

export default combineReducers({
  user,
  isLoading,
  news
});
