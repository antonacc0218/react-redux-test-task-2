import { AUTHORIZATION_SUCCESS, AUTHORIZATION_FAIL, SIGN_OUT } from './createActions';

const auth = (state = false, action) => {
  switch (action.type) {
    case AUTHORIZATION_SUCCESS:
      return { isAuthorized: true, userId: action.payload };
    case SIGN_OUT:
    case AUTHORIZATION_FAIL:
      return { isAuthorized: false };
    default:
      return state;
  }
};

export default auth;
