// DOG TEMPLATE
// <li class="dog" data-breed="somebreed" data-url="asdfasdf">
//   <img src="somesource">
// </li>

document.addEventListener('DOMContentLoaded', function() {
  const dogsUl = document.querySelector('#dogs')

  dogsUl.addEventListener('click', function(e) {
    if (e.target.classList.contains('dog')) {
      console.log(e.target)
    } else if (e.target.classList.contains('delete-dog')) {
      e.target.parentElement.remove()
    } else if (e.target.classList.contains('refresh-dog')) {
      const parentEl = e.target.parentElement
      const breedName = parentEl.dataset.breedName
      const imageEl = parentEl.querySelector('img')

      getDogImage(breedName)
        .then(url => imageEl.src = url)

    }
  })

  // promise holding an array of 83 image urls
  getAllBreedImages()
    .then(urls => {
      urls.forEach(url => {
        const dogBreed = url.split('/')[4]
        const dogTemplate = `
          <li class="dog" data-breed-name="${dogBreed}">
            <div class="dog-image" style="background-image: url('${url}');"></div>
            <button class="delete-dog">Delete</button>
            <button class="refresh-dog">Refresh</button>
          </li>
          `

        // const dogElement = document.createElement(li)
        // dogElement.className = "dog"
        // dogElement.dataset.breedName = dogBreed

        dogsUl.innerHTML += dogTemplate
      })
    })
})
