document.addEventListener('DOMContentLoaded',
function() {
  const tbody = document.querySelector('tbody')
  const form = document.querySelector('form')

  form.addEventListener('submit', function(e) {
    e.preventDefault()

    const data = {
      name: document.querySelector('#name').value,
      gender: document.querySelector('#gender').value,
      species_id: document.querySelector('#species').value
    }

    const animal = new Animal(data)
    tbody.innerHTML += animal.render()
  })
})
