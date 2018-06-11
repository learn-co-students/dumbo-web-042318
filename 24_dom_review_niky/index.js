document.addEventListener('DOMContentLoaded', init)

// refactored to fix:
  // defining buttons multiple times
  // make more const
  // smaller functions
  // separate rendering functions from others

function init() {
  const buttons = document.getElementById('buttons')
  appendButtons()
  renderTable(1)
  buttons.addEventListener('click', handleClick)


  function appendButtons() {
    // document.querySelector('#buttons') also works
    // insert individual buttons into button div
    // add a listener to the buttons div
    // also could add listener to each individual button
    for (let i=1; i <10; i++) {
      buttons.appendChild(createButton(i))
    }
  }

  function createButton(i){
    const button = document.createElement('button')
    button.innerHTML = `${i}`
    button.classList.add('multiplier')
    button.setAttribute('data-num', i)
    return button
  }

  function handleClick(event) {
    const n = parseInt(event.target.dataset.num)
    if (event.target.className === 'multiplier') {
      renderTable(n)
    }
  }

  function renderTable(n) {
    const table = document.getElementById('mult-table')
    table.innerHTML = ''
    for (let i=1; i < 11; i++) {
      table.appendChild(renderRow(n, i))
    }
  }

  function renderRow(n, i) {
    const row = document.createElement('tr')
    const data = document.createElement('td')
    data.innerHTML = rowData(n, i)
    row.appendChild(data)
    return row
  }

  function rowData(n, m) {
    return `${n} * ${m} = ${n * m}`
  }
}
