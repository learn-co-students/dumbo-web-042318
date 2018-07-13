import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { createStore } from 'redux'
import reducer from './reducer.js'

import { Provider } from 'react-redux'


const store = createStore(reducer)
console.log('store', store)
console.log('state', store.getState())

ReactDOM.render(<Provider store={store}>
  <App />
</Provider>, document.getElementById('root'));
