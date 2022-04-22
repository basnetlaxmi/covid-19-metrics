const loadContinents = async () => {
  // const response = await fetch('https://disease.sh/v3/covid-19/continents').then((res) => res.json()).then((continent) => continent);
  await fetch('https://disease.sh/v3/covid-19/continents')
    .then((res) => res.json())
    .then((continent) => {
      const selectedContinent = continent.map((continent) => ({
        name: continent.continent,
        deaths: continent.deaths,
      }));
      console.log(selectedContinent);
      return selectedContinent;
    });
};

export default loadContinents;
