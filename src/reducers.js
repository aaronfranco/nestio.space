import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { satelliteReducer } from './containers/satellite/satellite.reducer.js';
import { alertReducer } from './containers/alert/alert.reducer.js'


export default combineReducers({
  satellite: satelliteReducer,
  alert: alertReducer,
  routing: routerReducer
});
