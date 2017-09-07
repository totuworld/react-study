import { call, takeLatest } from 'redux-saga/effects';

import {
  REQUEST_LOGIN,
} from './actions';

import {
  login,
} from './api';

function* loginSaga({ payload: { fields, history } }) {
  try {
    console.log(fields);
    const { isError } = yield call(login, fields);
    console.log('isError: ', isError);
    if (isError) {
      history.push('/');
    } else {
      history.push('/');
    }
  } catch (e) {
    console.log('loginSaga err: ', e);
  }
}

export default function* mySaga() {
  yield takeLatest(REQUEST_LOGIN, loginSaga);
}
