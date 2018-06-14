function getAllBreeds() {
  return fetch('https://dog.ceo/api/breeds/list/all')
  	.then(resp => resp.json())
  	.then(data => {
      return Object.keys(data.message) // object of dog breeds
  		// Object.keys(data.message).forEach(breed => document.innerHTML = (`${breed}`))
  	})
}

function getDogImage(breed) {
  // const breed = "affenpinscher"
  return fetch(`https://dog.ceo/api/breed/${breed}/images/random`)
    .then(resp => resp.json())
    .then(data => data.message)
}

function getAllBreedImages() {
  return getAllBreeds()
    .then((breedNames) => {
      // convert each name to a promise with urls
      const promises = breedNames.map(breedName => {
        return getDogImage(breedName)
      })

      // takes list of promises, returns one
      return Promise.all(promises)
    })
}

// const getDog = (breed) => fetch(`https://dog.ceo/api/breed/${breed}/images/random`)
//   .then(resp => resp.json())
//   .then(data => data.message)
//

// class DogCEOAdapter {
//   // all the methods that relate to
//   // getting information from the DOG CEO API
//
//   // no `this` inside these functions
//   // so make them `static` functions
//   static getAllBreeds() {
//     return fetch('https://dog.ceo/api/breeds/list/all')
//     	.then(resp => resp.json())
//     	.then(data => {
//         return Object.keys(data.message) // object of dog breeds
//     		// Object.keys(data.message).forEach(breed => document.innerHTML = (`${breed}`))
//     	})
//   }
//
//   static getDogImage(breed) {
//     // const breed = "affenpinscher"
//     return fetch(`https://dog.ceo/api/breed/${breed}/images/random`)
//       .then(resp => resp.json())
//       .then(data => data.message)
//   }
// }
