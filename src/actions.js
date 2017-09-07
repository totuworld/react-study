export const USER_FETCH_REQUESTED = 'USER_FETCH_REQUESTED';
export const USER_FETCH_SUCCEEDED = 'USER_FETCH_SUCCEEDED';
export const USER_FETCH_FAILED = 'USER_FETCH_FAILED';

export const REQUEST_LOGIN = 'REQUEST_LOGIN';

export const requestLogin = payload => ({ type: REQUEST_LOGIN, payload });
