import React, { Component } from 'react';
import ActShareApp from './ActShareApp';
import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import { Provider } from 'react-redux';
import reducer from '../reducers';
import { devTools, persistState } from 'redux-devtools';
import { DevTools, DebugPanel, LogMonitor } from 'redux-devtools/lib/react';
import thunk from 'redux-thunk';
import { Router, Route } from 'react-router';
import Act from '../components/act/Act';

const finalCreateStore = compose(
  applyMiddleware(thunk),
  devTools(),
  persistState(window.location.href.match(/[?&]debug_session=([^&]+)\b/)),
  createStore
);


const store = finalCreateStore(reducer);

export default class App extends Component {
  render() {
    return (
      <div>
        <Provider store={store}>
          {() =>
            <Router history={this.props.history}>
              <Route path='/' component={ActShareApp}>
                <Route path='/subs/:id' component={Act} />
              </Route>
            </Router>
          }
        </Provider>
        <DebugPanel top right bottom>
          <DevTools store={store} monitor={LogMonitor} />
        </DebugPanel>
        {/*<DebugPanel top right bottom>
          <DevTools store={store} monitor={LogMonitor} />
        </DebugPanel>*/}
      </div>
    );
  }
}
