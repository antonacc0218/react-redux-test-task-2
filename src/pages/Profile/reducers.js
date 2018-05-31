import * as type from './actionTypes';

export const userInfoReducer = (state = null, action) => {
  switch (action.type) {
    case type.USER_INFO_FETCH_SUCCESS:
      return action.payload;
    default:
      return state;
  }
};
