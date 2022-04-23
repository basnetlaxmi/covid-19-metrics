import fetchingCountries from './countries';

const fetchingData = () => fetchingCountries().then((data) => data);

export default fetchingData;
