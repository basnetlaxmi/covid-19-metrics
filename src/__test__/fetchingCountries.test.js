import '@testing-library/jest-dom/extend-expect';
import fetchingData from '../__mocks__/fetchingCountries';

describe('test fetching data', () => {
  it('test fetching country id', async () => {
    await fetchingData().then((data) => expect(data.countries[0].id).toBe(1));
  });

  it('test fetching country name', async () => {
    await fetchingData().then((data) => expect(data.countries[0].name).toBe('Egypt'));
  });

  it('test fetching country deaths', async () => {
    await fetchingData().then((data) => expect(data.countries[0].deaths).toBe(7297));
  });

  it('test fetching country img', async () => {
    await fetchingData().then((data) => expect(data.countries[0].flag).toBe('url'));
  });

  it('test fetching country continent', async () => {
    await fetchingData().then((data) => expect(data.countries[0].continent).toBe('Africa'));
  });
});
