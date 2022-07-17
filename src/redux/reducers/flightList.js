const initialState = {
  isLoading: false,
  data: [],
  error: {}

};


const flightListReducer = (state = initialState, action) => {
  switch (action.type) {
/*     case value:
      
     return {...state }
   */
    default:
      return state;
  }
};


export default flightListReducer;