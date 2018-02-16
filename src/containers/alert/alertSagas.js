import { call, fork, put } from 'redux-saga/effects';
import { alertActions } from './alertActions';

// 
// function* updateAlerts(data) {
//   try {
//
//     yield put({ type: 'ADD_ALERT', payload })
//
//   }
//   catch (error) {
//     // yield put(authActions.signInFailed(error));
//   }
// }
//
// function* takeAlerts() {
//    yield takeLatest("CHECK_DATA", updateAlerts);
// }

export default function* alertSagas() {
  // yield fork(takeAlerts);
}
