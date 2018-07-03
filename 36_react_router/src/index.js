import React from 'react';
import ReactDOM from 'react-dom';
import ExampleApp from './ExampleApp';
import { BrowserRouter } from 'react-router-dom';

import 'semantic-ui-css/semantic.min.css';

ReactDOM.render(
  <BrowserRouter>
    <ExampleApp />
  </BrowserRouter>,
  document.getElementById('root')
);
