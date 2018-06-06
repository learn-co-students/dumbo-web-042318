function addDef(num1, num2) {
  return num1 + num2
}

addDef(1, 2)

const addExp = function(num1, num2) {
  return num1 + num2
}

addExp(1, 2)

const addArrow1 = (num1, num2) => num1 + num2
const addArrow2 = (num1, num2) => { return num1 + num2 }
// `this` is special in arrow functions

addArrow1(1, 2)


function makePerson(callback) {
  return function(name) {
    return "Hi, " + callback(name)
  }
}

// function capitalize(name) { return name.toUpperCase() };
// const getName = makePerson(capitalize)
// const greeting = getName('abdoul') // 'Hi, ABDOUL'

makePerson(capitalize)('Abdoul')






























// tell the document to wait on a signal called DOMContentLoaded
// when that happens, THEN call the callback function
// console.log('first')
document.addEventListener('DOMContentLoaded', function() {
  // console.log('second')
  const els = [...document.getElementsByTagName('li')]

  let startGreen = 0
  const changeColor = function(el, index, arr) {
    el.style.color = `rgb(0, ${startGreen}, 0)`
    startGreen += 10
  }
  els.forEach(changeColor)

  let startMsg = 0
  els.forEach(function(el) {
    el.addEventListener('click', function(e) {
      alert('hello, world! ' + startMsg)
      startMsg++
    })
  })
});
// console.log('third')

// console.log('first')
// register an event listener --- waiting...
// console.log('third')
// waiting over --- console.log('second')

const myMap = function(arr, callback) {
  const newArray = []
  for (let el of arr) {
    newArray.push(callback(el))
  }
  return newArray
}

myMap([1,2,3], function(num) { return num *  2 })
// create newArray
// push in the result of calling callback with 1
// push in the result of calling callback with 2
// push in the result of calling callback with 3
// return newArray
