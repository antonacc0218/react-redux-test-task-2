import * as type from './actionTypes';

export const userIdReducer = (state = null, action) => {
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
