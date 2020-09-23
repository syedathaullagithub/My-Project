import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import AppRedux from './AppRedux';
import * as serviceWorker from './serviceWorker';
import App from './App';
import CrudOperations from './components/CrudOperations';
import App1 from './App1';
import App2 from './App2';

ReactDOM.render(
  <React.Fragment>
    <App2 />
   
  </React.Fragment>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
