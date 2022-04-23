import '@testing-library/jest-dom/extend-expect';
import fetchingContinents from '../__mocks__/fetchingContinents';

describe('test fetching data', () => {
  it('test fetching country name', async () => {
    await fetchingContinents().then((data) => expect(data.countries[0].name).toBe('North America'));
  });

  it('test fetching country deaths', async () => {
    await fetchingContinents().then((data) => expect(data.countries[0].deaths).toBe(1175336));
  });
});
