import { put, call, takeLatest } from 'redux-saga/effects';

import {
  USER_FETCH_REQUESTED,
  USER_FETCH_SUCCEEDED,
  USER_FETCH_FAILED,
} from './actions';

function* fetchUser(action) {
  try {
    const user = yield call(() => ({}), action.payload.userId);
    yield put({ type: USER_FETCH_SUCCEEDED, user });
  } catch (e) {
    yield put({ type: USER_FETCH_FAILED, message: e.message });
  }
}

export default function* mySaga() {
  yield takeLatest(USER_FETCH_REQUESTED, fetchUser);
}
