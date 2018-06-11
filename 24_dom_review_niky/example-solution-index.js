document.addEventListener('DOMContentLoaded', () => {
  let buttonArea = document.getElementById('buttons')
  let tableArea = document.getElementById('mult-table')
  buttonArea.addEventListener('click', handleButtonClick)
  attachButtons()
  generateRows(1)


  function attachButtons () {
    for (let i = 1; i < 10; i++) {
      let button = document.createElement('button')
      button.innerText = `${i}`
      button.className = 'multiplier'
      buttonArea.append(button)
    }
  }

  function handleButtonClick (event) {
    if (event.target.className === 'multiplier'){
      tableArea.innerHTML = ''
      let number = parseInt(event.target.innerText)
      generateRows(number)
    }
  }

  function generateRows(num) {
    for (let i = 1; i <= 10; i++) {
      let newRow = `<tr>
        <td>
          ${num} x ${i} = ${num*i}
        </td>
      </tr>`
      tableArea.innerHTML += newRow
    }
  }

})
