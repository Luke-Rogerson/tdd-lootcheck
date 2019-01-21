import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock'; // allows us to mock a fetch request
import { FETCH_BITCOIN } from './constants';
import { fetchBitcoin } from './bitcoin';

const createMockStore = configureMockStore([thunk]); // here we provide the middleware
const store = createMockStore({ bitcoin: {} }); // our fake store. Initialise with data - {bitcoin: {} }
const mockResponse = { body: { bpi: 'bitcoin price index' } }; // our fake response from the endpoint

fetchMock.get(
  'https://api.coindesk.com/v1/bpi/currentprice.json',
  mockResponse
);

// *** PROMISED BASED ***
// it('creates an async action to fetch the bitcoin value', () => {
//   const expectedActions = [{ bitcoin: mockResponse.body, type: FETCH_BITCOIN }];
//   return store.dispatch(fetchBitcoin()).then(() => {
//     expect(store.getActions()).toEqual(expectedActions);
//   });
// });

// *** ASYNC/AWAIT ***
it('creates an async action to fetch the bitcoin value', async () => {
  const expectedActions = [{ bitcoin: mockResponse.body, type: FETCH_BITCOIN }];
  await store.dispatch(fetchBitcoin()).then(() => {
    expect(store.getActions()).toEqual(expectedActions); //store.getActions shows us what actions the store actually used
  });
});
