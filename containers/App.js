import React, { Component } from 'react';
import ActShareApp from './ActShareApp';
import { createStore } from 'redux';
import { Provider } from 'redux/react';
import * as reducers from '../reducers';

const store = createStore(reducers);

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        {() => <ActShareApp />}
      </Provider>
    );
  }
}
