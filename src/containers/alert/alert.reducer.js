
import { Record } from 'immutable';


export const AlertState = new Record({
  alerts: []
});


export function alertReducer(state = new AlertState(), {payload, type}) {
  switch (type) {
    case "ADD_ALERT":
      return Object.assign({}, state, {
        alerts: [payload.alert, ...state.alerts]
      });

    default:
      return state;
  }
}
