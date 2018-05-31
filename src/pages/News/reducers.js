import * as type from './actionTypes';

const initNewsState = {
  list: [],
  isLoading: false
};

export const newsReducer = (state = initNewsState, action) => {
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
