// reducers.js
const initialState = {
  data: [],
  detail: {}, // new state for detail data
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_DATA':
      return { ...state, data: action.payload };
    case 'SET_DETAIL_DATA':
      return { ...state, detail: action.payload };
    default:
      return state;
  }
};

export default rootReducer;
