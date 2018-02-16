export const satelliteActions = {

  updateSatellite: data => ({
    type: 'UPDATE_HISTORY',
    payload: data
  }),
  process: data => ({
    type: 'PROCESS_DATA',
    payload: data
  })

};
