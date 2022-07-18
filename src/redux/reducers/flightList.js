import { FETCH_FLIGHT_LIST_COMPLETE, FETCH_FLIGHT_LIST_START, FETCH_FLIGHT_LIST_ERROR  } from '../actions/flightList'


const initialState = {
  isLoading: false,
  data: [],
  error: {}

};


const flightListReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_FLIGHT_LIST_START: 
      return {...state, isLoading: true, data: {}, error:{} }
    case FETCH_FLIGHT_LIST_COMPLETE: 
      return {...state, isloading: false, data: action.payload, error: {} }
    case FETCH_FLIGHT_LIST_ERROR: 
      return {...state, isLoading: false, data: {}, error: action.error }
  
    default:
      return state;
  }
};


export default flightListReducer;