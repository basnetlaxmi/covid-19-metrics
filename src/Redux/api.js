const loadContinents = async () => {
  const data = await fetch('https://disease.sh/v3/covid-19/continents')
    .then((res) => res.json())
    .then((continent) => {
      const selectedContinent = continent.map((continent) => ({
        name: continent.continent,
        deaths: continent.deaths,
        countries: continent.countries,
      }));
      return selectedContinent;
    });
  return data;
};

const loadCountries = async () => {
  const data = await fetch('https://disease.sh/v3/covid-19/countries')
    .then((res) => res.json())
    .then((countries) => {
      const selectedCountries = countries.map((country) => ({
        // eslint-disable-next-line dot-notation
        id: country.countryInfo['_id'],
        name: country.country,
        flag: country.countryInfo.flag,
        deaths: country.deaths,
        continent: country.continent,
      }));
      return selectedCountries;
    });
  return data;
};
export { loadContinents, loadCountries };
