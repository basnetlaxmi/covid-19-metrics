import continentsAPI from './continents';

const fetchingContinents = () => continentsAPI().then((data) => data);

export default fetchingContinents;
