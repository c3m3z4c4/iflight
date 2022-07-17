import { combineReducers } from '@reduxjs/toolkit';

import flightList from './flightList';


/* export const flightSearchReducer = (state = {}, action) => {
  switch (action.type) {
    case FETCH_FLIGHT_LIST:
      return {
        ...state, 
      }
      
    
    case FETCH_FLIGHT_DETAILS:
            return {
        ...state
      }
  
    
    default:
      return state
  }
} */

export default combineReducers({
  flightList,
});