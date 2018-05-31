import * as t from './actionTypes';

export const notificationRemoveByIndex = (index) => ({
  type: t.NOTIFICATION_REMOVE_BY_INDEX,
  payload: index
});

export const notificationPositiveAdd = (message) => ({
  type: t.NOTIFICATION_POSITIVE_ADD,
  payload: message
});

export const notificationErrorAdd = (message) => ({
  type: t.NOTIFICATION_ERROR_ADD,
  payload: message
});
