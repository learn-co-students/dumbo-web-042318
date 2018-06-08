const data = JSON.stringify({
  brew: {
    blend_name: 'asdfasd',
    origin: 'asdfas',
    notes: 'asdf',
    strength: 5
  }
})

const badData = JSON.stringify({
  brew: {
    blend_name: 'asdfasd',
    origin: 'asdfas',
    notes: 'asdf',
    strength: 100
  }
})


const req = window.fetch('http://localhost:3000/brews', {
  method: 'POST',
  body: badData,
  headers: {
    'Content-Type': 'application/json'
  }
})

req.then(function (response) {
  return response.json()
}).then(function(brew) {
  if (brew.errors) {
    throw brew
  } else {
    return brew
  }
}).then(function(brew) {
	document.write(brew.blend_name)
	return brew
}).then(function(brew) {
	document.write(brew.strength)
	return brew
}).then(function(brew) {
	document.write(brew.notes)
	return "DONE!"
}).catch(function(errors) {
  console.log('in a catch!')
  console.log(errors)
}).finally(function() {
  document.body.innerHTML = `
  <iframe width="560" height="315" src="https://www.youtube.com/embed/drvS9w-lTMc" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
  `
})
