import { loadCountries } from '../api';
// constant
const FETCH_COUNTRIES = 'covid-19-metrics/Countries/FETCH_COUNTRIES';

// Action
export const fetchCountries = () => async (dispatch) => {
  const res = await loadCountries();
  dispatch({ type: FETCH_COUNTRIES, payload: res });
};

// Reducers
const initialState = {
  countries: [],
};

const countryReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_COUNTRIES:
      return {
        ...state,
        countries: action.payload,
      };
    default:
      return state;
  }
};
export default countryReducer;
