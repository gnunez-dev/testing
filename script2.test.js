const fetch = require('node-fetch');
const swapi = require('./script2');

it('calls swapi to get people with async/await', (done) => {
  expect.assertions(1)
  swapi.getPeople(fetch)
    .then(data => {
      expect(data.count).toEqual(87)
      done()
    })
})

it('calls swapi to get people with a promise', (done) => {
  expect.assertions(1)
  swapi.getPeoplePromise(fetch)
    .then( data => {
      expect(data.count).toEqual(87)
      done()
    })
})