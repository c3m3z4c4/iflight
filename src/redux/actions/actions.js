

const fetchFlightList = (params) => {
  
  const FETCH_FLIGHT_LIST = 'FETCH_FLIGHT_LIST';
  const FETCH_FLIGHT_DETAILS = 'FETCH_FLIGHT_DETAILS';

  return {
    type: FETCH_FLIGHT_LIST,
    params
  }
}


const fetchFlighDetails = (params) => { 
  return {
    type: FETCH_FLIGHT_DETAILS,
    params
  }
}