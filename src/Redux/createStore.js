import { combineReducers, applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import continentReducer, { fetchContinents } from './Continents/Continents';
import countryReducer, { fetchCountries } from './Countries/Countries';

const rootReducer = combineReducers({ continentReducer, countryReducer });
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk, logger)));
store.dispatch(fetchContinents());
store.dispatch(fetchCountries());
export default store;
