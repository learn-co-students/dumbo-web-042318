document.addEventListener('DOMContentLoaded',
function() {
  const tbody = document.querySelector('tbody')
  const form = document.querySelector('form')

  // getAnimals().then(json => {
  //   json.forEach(animalData => {
  //     const animal = new Animal(animalData)
  //     tbody.innerHTML += animal.render()
  //   })
  // })

  form.addEventListener('submit', function(e) {
    e.preventDefault()
    console.log(e)
    const data = {
      name: document.querySelector('#name').value,
      gender: document.querySelector('#gender').value,
      species_id: document.querySelector('#species').value
    }

    const animal = new Animal(data)
    tbody.innerHTML += animal.render()


    // createAnimal(data).then(json => {
    //   const animal = new Animal(json)
    //   tbody.innerHTML += animal.render()
    // })
  })
})
