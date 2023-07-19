const fetch = require('node-fetch');
const swapi = require('./script2');

//Test with a function that return a promise.

//option done
it('calls swapi to get people with async/await', (done) => {
  expect.assertions(1)
  swapi.getPeople(fetch)
    .then(data => {
      expect(data.count).toEqual(87)
      done()
    })
})

//opntio return
it('calls swapi to get people with a promise', () => {
  expect.assertions(1)
  return swapi.getPeoplePromise(fetch)
    .then( data => {
      expect(data.count).toEqual(87)
    })
})