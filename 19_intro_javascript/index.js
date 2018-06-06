alert('back again!');
console.log('hello!');

document.addEventListener('DOMContentLoaded', function() {
  document.getElementsByTagName('h1')[0].style.color = 'green';
});

// Data types

// 1. String
//    "my double-quoted string" can use inside of single quotes
//    'my single-quoted string' can use inside of double quotes
//    `my template literal` can interpolate javascript expressions

// 2. Number
//    1
//    1.00
//    -1
//    -1.00
//    Infinity, -Infinity
//    1e2
//    NaN (not a number)
//    Math.PI

// 3. Boolean
//    true
//    false
//      null
//      undefined
//      0
//      NaN
//      ''

// 4. Symbol
//    Symbol('hello')
//    Symbol.for('goodbye')

// 5. undefined

// 6. null

// 7. Object - pass by reference
//    {} // Object literal

// 7.5. Types of objects
//    Array
//    Function
//    Promise
//    Regular Expression (RegEx)

// VARIABLES - holding on to data in a scope
//  global -
//    without variable keyword
//    global scope (at the top-level object)
//  let -
//    create a variable that you CAN reassign,
//    but you can't reuse identifier (cannot redeclare)
//    block-level scope (program level, function level, block level {})
//  const -
//    create a variable that you CAN'T reassign
//    but you can't reuse identifier (cannot redeclare)
//    block-level scope (program level, function level, block level {})
//  var - old way of creating a variable, can do anything with it
