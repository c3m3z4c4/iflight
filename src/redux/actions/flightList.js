import { authToken, apiCall } from "../../api/index";

export const FETCH_FLIGHT_LIST_START = 'FETCH_FLIGHT_LIST_START';
export const FETCH_FLIGHT_LIST_COMPLETE  = 'FETCH_FLIGHT_LIST_COMPLETE';
export const FETCH_FLIGHT_LIST_ERROR = 'FETCH_FLIGHT_LIST_ERROR';
export const ADD_SEARCH_ITEM = 'ADD_SEARCH_ITEM';

const fetchFlightListStart = () => ({
  type: FETCH_FLIGHT_LIST_START
});

const fetchFlightListComplete = (payload) => ({
  type: FETCH_FLIGHT_LIST_COMPLETE,
  payload,
});

const fetchFlightListError = (error) => ({
  type: FETCH_FLIGHT_LIST_ERROR,
  error,
});


//Action creators

export const fetchFlightList = (params) => async (dispatch) => {
  console.log(dispatch);
  try {
    dispatch(fetchFlightListStart())
    const apiToken = await authToken();
    console.log(`este es el token: ${apiToken}`);
    const response = await apiCall(apiToken, params);
    console.log(response);
    dispatch(fetchFlightListComplete(response));
  } catch (error) {
    dispatch(fetchFlightListError(error));
  }

}

export const addSearchItem = (payload) => ({ 
  type: ADD_SEARCH_ITEM,
  payload,
})
