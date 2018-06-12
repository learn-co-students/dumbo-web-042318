const baseUrl = 'http://localhost:3000/chores'

function urlFor(id) {
  return baseUrl + '/' + id
}

function getChores() {
  return fetch(baseUrl)
    .then(r => r.json())
}

function getChore(id) {
  return fetch(urlFor(id))
    .then(r => r.json())
}

function deleteChores(id) {
  return fetch(urlFor(id), {
    headers: {
      'content-type': 'application/json'
    },
    method: 'DELETE' // *GET, POST, PUT, DELETE, etc.
  })
  .then(response => response.json())
}

function createChore(data) {
  return fetch(baseUrl, {
    body: JSON.stringify(data), // must match 'Content-Type' header
    headers: {
      'content-type': 'application/json'
    },
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
  })
  .then(response => response.json())
}

function updateChore(data) {
  return fetch(urlFor(data.id), {
    body: JSON.stringify(data), // must match 'Content-Type' header
    headers: {
      'content-type': 'application/json'
    },
    method: 'PUT' // *GET, POST, PUT, DELETE, etc.
  })
  .then(response => response.json())
}
