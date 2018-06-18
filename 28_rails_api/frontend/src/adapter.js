const baseURL = 'http://localhost:3000/animals/'

const getAnimals = () => {
  return get(baseURL)
}

const createAnimal = params => {
  return post(baseURL, params)
}
const get = url => {
  return fetch(url).then(res => res.json())
}

const post = (url, body) => {
  return fetch(url, {
    method: 'POST',
    body: JSON.stringify(body),
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json'
    }
  }).then(res => res.json())
}
