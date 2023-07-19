const fetch = require('node-fetch');
const swapi = require('./script2');

it('calls swapi to get people', async () => {
  const data = await swapi.getPeople(fetch)
  expect(data.count).toEqual(87)
})