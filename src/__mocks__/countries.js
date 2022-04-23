const fetchingCountries = () => Promise.resolve({
  countries: [
    {
      id: 1,
      name: 'Egypt',
      flag: 'url',
      deaths: 7297,
      continent: 'Africa',
    },
  ],
});

export default fetchingCountries;
