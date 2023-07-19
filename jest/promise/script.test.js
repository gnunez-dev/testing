const fetch = require('node-fetch');
const swapi = require('./script');

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
  expect.assertions(2)
  return swapi.getPeoplePromise(fetch)
    .then( data => {
      expect(data.count).toEqual(87)
      expect(data.results.length).toBeGreaterThan(5)
    })
})

//MOCK
it('getPeople returns count and results with mock', () => {
  const mockFetch = jest.fn()
    .mockReturnValue(Promise.resolve({
      json: () => Promise.resolve({
        count: 87,
        results: [0, 1, 2, 3, 4, 5]
      })
    }))

  expect.assertions(4)
  return swapi.getPeoplePromise(mockFetch)
    .then(data => {
      expect(mockFetch.mock.calls.length).toBe(1)
      expect(mockFetch).toBeCalledWith('https://swapi.py4e.com/api/people/')
      expect(data.count).toEqual(87)
      expect(data.results.length).toBeGreaterThan(5)
    })
})