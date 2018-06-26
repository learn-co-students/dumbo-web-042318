import React from 'react';
import ReactDOM from 'react-dom';
import List from './App';

const arrayElements = ['marie', 'chris a', 'anum'];
const someObject = { myKey: 'myValue' };

ReactDOM.render(
  <List lis={arrayElements} someObject={someObject} />,
  document.getElementById('root')
);

// ReactDOM.render(
//   React.createElement(List, { arrayElements: arrayElements, someObject: someObject }),
//   document.getElementById('root')
// );
