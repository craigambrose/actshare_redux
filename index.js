import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import BrowserHistory from 'react-router/lib/BrowserHistory';

ReactDOM.render(
  <App history={new BrowserHistory()} />,
  document.getElementById('root')
);

require("bootstrap-sass!./assets/stylesheets/bootstrap-sass.config.js");
