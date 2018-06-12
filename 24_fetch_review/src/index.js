document.addEventListener('DOMContentLoaded', function() {
  const choreListEl = document.querySelector('#chore-list');
  Adapter.getAll().then((chores /* array */) => {
    chores.forEach(function(chore) {
      choreListEl.innerHTML += `
        <div>
          <h3>${chore.title}</h3>
          <p>${chore.priority}</p>
          <p>${chore.duration}</p>
        </div>
      `;
    });
  });
});
