import React from 'react';
import App from './containers/App';
import Router from 'react-router';
import Act from './components/Act';
import AboutUs from './components/AboutUs';

let DefaultRoute = Router.DefaultRoute;
let Route = Router.Route;

var routes = (
  <Route name="app" path="/" handler={App}>
    <DefaultRoute handler={Act}/>
    <Route name="about" handler={AboutUs}/>
  </Route>
);

//React.render(
//  <App />,
//  document.getElementById('root')
//);

Router.run(routes, function (Handler) {
  React.render(<Handler/>, document.getElementById('root'));
});

require("bootstrap-sass!./assets/stylesheets/bootstrap-sass.config.js");
