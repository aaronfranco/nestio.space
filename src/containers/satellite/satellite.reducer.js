
import { Record } from 'immutable';


export const SatelliteState = new Record({
  averageAltitude: null,
  history: [],
  holdingOrbit: true
});


export function satelliteReducer(state = new SatelliteState(), { payload, type }) {
  switch (type) {
    case "UPDATE_HISTORY":
      return Object.assign({}, state, {
        history: [...payload.history],
        averageAltitude: payload.average,
        holdingOrbit: payload.orbit
      });
    default:
      return state;
  }
}
