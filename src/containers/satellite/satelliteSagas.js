import { call, fork, put, takeLatest } from 'redux-saga/effects';
import { modifyHistory, checkAverage, checkAlert } from './satelliteUtilities'


function* handleSatelliteData(data) {
  try {

    let updatedHistory = yield call( modifyHistory, data.payload )

    let payload = yield call( checkAverage, updatedHistory )

    let alert = yield call( checkAlert, payload )

    if(alert){

      yield put({ type: "ADD_ALERT", payload: alert })

    }

    yield put({ type: 'UPDATE_HISTORY', payload })

  }
  catch (error) {

    console.log("Error: ", error)

  }
}

function* takeData() {

   yield takeLatest("PROCESS_DATA", handleSatelliteData);

}

export default function* satelliteSagas() {
  yield fork(takeData);
}
