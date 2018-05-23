export const AUTHORIZATION_REQUEST = 'AUTHORIZATION_REQUEST';
export const AUTHORIZATION_SUCCESS = 'AUTHORIZATION_SUCCESS';
export const AUTHORIZATION_FAIL = 'AUTHORIZATION_FAIL';
export const SIGN_OUT = 'SIGN_OUT';

export const USER_INFO_FETCH_REQUEST = 'USER_INFO_FETCH_REQUEST';
export const USER_INFO_FETCH_SUCCESS = 'USER_INFO_FETCH_SUCCESS';
export const USER_INFO_FETCH_FAIL = 'USER_INFO_FETCH_FAIL';

export const NEWS_FETCH_REQUEST = 'NEWS_FETCH_REQUEST';
export const NEWS_FETCH_SUCCESS = 'NEWS_FETCH_SUCCESS';
export const NEWS_FETCH_FAIL = 'NEWS_FETCH_FAIL';

export const NOTIFICATION_POSITIVE_ADD = 'NOTIFICATION_POSITIVE_ADD';
export const NOTIFICATION_ERROR_ADD = 'NOTIFICATION_ERROR_ADD';
export const NOTIFICATION_REMOVE_BY_INDEX = 'NOTIFICATION_REMOVE_BY_INDEX';

export const signOut = () => ({
  type: SIGN_OUT
});

export const authorizationRequest = () => ({
  type: AUTHORIZATION_REQUEST
});

export const authorizationSuccess = (id) => ({
  type: AUTHORIZATION_SUCCESS,
  payload: id
});

export const authorizationFail = (error) => ({
  type: AUTHORIZATION_FAIL,
  payload: error,
  error: true
});

export const userInfoFetchRequest = () => ({
  type: USER_INFO_FETCH_REQUEST
});

export const userInfoFetchSuccess = (data) => ({
  type: USER_INFO_FETCH_SUCCESS,
  payload: data
});

export const userInfoFetchFail = (error) => ({
  type: USER_INFO_FETCH_FAIL,
  payload: error,
  error: true
});

export const newsFetchRequest = () => ({
  type: NEWS_FETCH_REQUEST
});

export const newsFetchSuccess = (data) => ({
  type: NEWS_FETCH_SUCCESS,
  payload: data
});

export const newsFetchFail = (error) => ({
  type: NEWS_FETCH_FAIL,
  payload: error,
  error: true
});

export const notificationRemoveByIndex = (index) => ({
  type: NOTIFICATION_REMOVE_BY_INDEX,
  payload: index
});

export const notificationPositiveAdd = (message) => ({
  type: NOTIFICATION_POSITIVE_ADD,
  payload: message
});

export const notificationErrorAdd = (message) => ({
  type: NOTIFICATION_ERROR_ADD,
  payload: message
});

