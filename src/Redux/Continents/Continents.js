import loadContinents from '../api';
// constant
const FETCH_CONTINENTS = 'covid-19-metrics/Continents/FETCH_CONTINENTS';

// Action
export const fetchContitnents = () => async (dispatch) => {
  const res = await loadContinents();
  console.log(res);
  dispatch({ type: FETCH_CONTINENTS, payload: res });
};

// Reducers
const initialState = {
  continents: [],
};

const continentReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CONTINENTS:
      console.log(action.payload);
      return {
        ...state,
        continents: action.payload,
      };
    default:
      return state;
  }
};
export default continentReducer;
