import { loadContinents } from '../api';
// constant
const FETCH_CONTINENTS = 'covid-19-metrics/Continents/FETCH_CONTINENTS';
const GET_SINGLE_CONTINENT = 'covid-19-metrics/Continents/GET_SINGLE_CONTINENT';

// Action
export const fetchContinents = () => async (dispatch) => {
  const res = await loadContinents();
  dispatch({ type: FETCH_CONTINENTS, payload: res });
};

export const getSingleContinent = (continent) => ({
  type: GET_SINGLE_CONTINENT,
  payload: continent,
});

// Reducers
const initialState = {
  continents: [],
  continent: [],
};

const continentReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CONTINENTS:
      return {
        ...state,
        continents: action.payload,
      };
    case GET_SINGLE_CONTINENT:
      return {
        ...state,
        continent: action.payload,
      };

    default:
      return state;
  }
};
export default continentReducer;
