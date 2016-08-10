import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import routes from './routes';

ReactDOM.render(
  <Provider>
    <Router history={browserHistory} routes={routes} />
  </Provider>
);