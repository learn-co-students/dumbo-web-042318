// ERROR HANDLING

const Adapter = {
  createOne: function createOne(data) {
    const baseURL = 'http://localhost:3000/chores';

    // fetch(url, options = {method, headers, body})
    return fetch(baseURL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }).then((resp) => resp.json());
  },
  getAll: function getAll() {
    const baseURL = 'http://localhost:3000/chores';
    const options = {
      // ALL OPTIONAL HERE
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      }
    };

    return fetch(baseURL, options).then((resp) => resp.json());
  },
  getOne: function getOne(id) {
    const baseURL = 'http://localhost:3000/chores';

    return fetch(`${baseURL}/${id}`).then((resp) => resp.json());
  },
  updateOne: function updateOne(id, data) {
    const baseURL = 'http://localhost:3000/chores';
    const options = {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    };

    return fetch(`${baseURL}/${id}`, options).then((resp) => resp.json());
  },
  deleteOne: function deleteOne(id) {
    const baseURL = 'http://localhost:3000/chores';
    const options = {
      method: 'DELETE'
    };

    return fetch(`${baseURL}/${id}`, options).then((resp) => resp.json());
  }
};
