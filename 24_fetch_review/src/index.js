
document.addEventListener('DOMContentLoaded', function() {
  const choreListEl = document.querySelector('#chore-list');
  const choreForm = document.getElementById("new-chore-form");
  choreForm.addEventListener('submit', postChore)
  choreListEl.addEventListener('click', (e) => {
    if (e.target.className === 'delete-button'){
      Adapter.deleteOne(e.target.parentElement.dataset.id).then(console.log)
      // remove the correct chore card from the page - where should this be done?
    }
  })

  function renderChore(chore) {
    choreListEl.innerHTML += `
      <div class='chore-card' data-id=${chore.id}>
        <button class='delete-button'> x </button>
        <h3>${chore.title}</h3>
        <p>${chore.priority}</p>
        <p>${chore.duration}</p>
      </div>
    `;
  }

  function postChore(e) {
    e.preventDefault()
    let data = {
      title: e.target.title.value,
      priority: e.target.priority.value,
      duration: e.target.duration.value
    }
    Adapter.createOne(data).then(renderChore)
  }

  Adapter.getAll().then((chores /* array */) => {
    console.log(chores)
    chores.forEach(renderChore);
  });
});
