const fetch = require('node-fetch');
const swapi = require('./script2');

it('calls swapi to get people with async/await', async () => {
  const data = await swapi.getPeople(fetch)
  expect(data.count).toEqual(87)
})

it('calls swapi to get people with a promise', () => {
  swapi.getPeople(fetch)
    .then( response => response.json())
    .then( data => {
      expect(data.count).toEqual(87)
    })
})