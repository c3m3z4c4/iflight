import { FETCH_FLIGHT_LIST_COMPLETE, FETCH_FLIGHT_LIST_START, FETCH_FLIGHT_LIST_ERROR, ADD_SEARCH_ITEM  } from '../actions/flightList'


const initialState = {
  isLoading: false,
  data: [],
  error: {},
  searchItems: []
};


const flightListReducer = (state = initialState, action) => {
  console.log(state); 
  switch (action.type) {
    case FETCH_FLIGHT_LIST_START:
      // console.log(`resultsReducer ${action.type}`);
      return {...state, isLoading: true, data:{}, error:{} }
    case FETCH_FLIGHT_LIST_COMPLETE: 
      return {...state, isloading: false, data: action.payload, error:{} }
    case FETCH_FLIGHT_LIST_ERROR: 
      return {...state, isLoading: false, data: {}, error: action.error } 
    case ADD_SEARCH_ITEM: 
      return {...state, searchItems: [...state.searchItems, action.payload] }
  
    default:
      return state;
  }
};


export default flightListReducer;