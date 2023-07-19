const getPeoplePromise = fetch => {
  return fetch('https://swapi.py4e.com/api/people/')
    .then( response => response.json())
    .then( data => {
      return {
        count: data.count,
        results: data.results
      }
    })
}

const getPeople = async (fetch) => {
  const response = await fetch('https://swapi.py4e.com/api/people/')
  const data = await response.json()
  return {
    count: data.count,
    results: data.results
  }
}

module.exports = {getPeoplePromise, getPeople}