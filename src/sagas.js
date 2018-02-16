import { all } from 'redux-saga/effects'
import satelliteSagas from './containers/satellite/satelliteSagas';
import { alertSagas } from './containers/alert/alertSagas';


export default function* sagas() {
  yield all([
    ...satelliteSagas,
    ...alertSagas
  ]);
}
