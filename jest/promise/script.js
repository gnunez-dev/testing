const getPeoplePromise = fetch => {
  return fetch('https://swapi.py4e.com/api/people/')
    .then( ({data}) => {
      return {
        count: data.count,
        results: data.results
      }
    })
}

const getPeople = async (fetch) => {
  const {data} = await fetch('https://swapi.py4e.com/api/people/')
  return {
    count: data.count,
    results: data.results
  }
}

module.exports = {getPeoplePromise, getPeople}
