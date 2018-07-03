const BASE_URL = 'https://swapi.co/api';
const SWEl = document.getElementById('star-wars')

document.addEventListener('DOMContentLoaded', function() {
  for(let i = 1; i <= 10; i++) {
    fetchACharacter(BASE_URL, i)
      .then(person => new StarWarsCharacter(person))
      .then(char => {
        SWEl.innerHTML += char.htmlEl()
      })
  }
})


function fetchACharacter(baseURL, id) {
  return fetch(`${baseURL}/people/${id}`)
    .then(res => res.json())
    .then(person => {
      // Use the species URLs to get the species
      // person.species is an array of URLs

      const species = Promise.all(person.species.map(spec => {
        return fetch(spec).then(res => res.json()).then(obj => obj.name)
      }));
      // Promise.All takes an array of Promises
      // It returns a promise which will resolve when all the promises inside resolve.
      // This will be the array of the resolve values of each promise from the original array.
      // Here, it takes in the array of fetch requests and resolves to an array of the names from the responses.
      // This is useful when you want to have multiple asynchronous functions that you want to run simultaneously

      // Use the homeworld URL to fetch the homeworld to get the name.
      
      const homeworld = fetch(person.homeworld).then(res => res.json()).then(obj => obj.name)
      return Promise.all([person, homeworld, species]);
    })
    .then(([person, homeworld, species]) => ({...person, homeworld, species}))
}
