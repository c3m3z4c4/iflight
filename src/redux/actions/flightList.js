export const FETCH_FLIGHT_LIST_START = 'FETCH_FLIGHT_LIST_START';
export const FETCH_FLIGHT_LIST_COMPLETE  = 'FETCH_FLIGHT_LIST_COMPLETE';
export const FETCH_FLIGHT_LIST_ERROR  = 'FETCH_FLIGHT_LIST_ERROR';

const fetcFlightListStart = () => ({
  type: FETCH_FLIGHT_LIST_START
});

const fetcFlightListComplete = (payload) => ({
  type: FETCH_FLIGHT_LIST_COMPLETE,
  payload,
});

const fetcFlightListError = () => ({
  type: FETCH_FLIGHT_LIST_ERROR,
  error,
});
