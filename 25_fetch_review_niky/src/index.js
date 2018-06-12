document.addEventListener('DOMContentLoaded', onLoad)

const choreList = document.getElementById('chore-list')

function renderChores(chores) {
  chores.forEach(renderChore)
}

function renderChore(chore) {
  // TODO: add priority and duration
  let el = `<div class="chore-card"><input id="input-${chore.id}" type='text' value="${chore.title}">`
  el += `<div><button class="edit" data-id="${chore.id}">Edit</button>`
  el += `<button class="delete" data-id="${chore.id}">Delete</button>`
  el += '</div></div>'
  choreList.innerHTML += el
}

function onLoad() {
  choreList.innerHTML = ''
  getChores()
  .then(chores => {
    renderChores(chores)
  })
  .then(addClickListeners)
}

function addClickListeners() {
  const deleters = document.querySelectorAll('.delete')
  deleters.forEach(button => {
    button.addEventListener('click', onDelete)
  })

  const editors = document.querySelectorAll('.edit')
  editors.forEach(button => {
    button.addEventListener('click', onEdit)
  })
}

function onDelete(e) {
  const id = e.target.dataset.id
  deleteChores(id)
  .then(onLoad)
}

function onEdit(e) {
  const id = e.target.dataset.id
  const title = document.querySelector(`#input-${id}`).value
  const data = {
    "title": title,
    "id": id
  }
  updateChore(data)
}

// TODO: build out create action
