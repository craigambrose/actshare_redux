import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';
import apiMiddleware from '../middleware/api';
//import loggerMiddleware from 'redux-logger';
import * as reducers from '../reducers';
import { devTools, persistState } from 'redux-devtools';

const reducer = combineReducers(reducers);

let middleware = [ thunkMiddleware, apiMiddleware ];

const createStoreWithMiddleware = compose(
  applyMiddleware(...middleware),
  devTools(),
  persistState(
    window.location.href.match(/[?&]debug_session=([^&]+)\b/)
  ),
  createStore
);


/**
 * Creates a preconfigured store for this example.
 */
export default function configureStore(initialState) {
  return createStoreWithMiddleware(reducer, initialState);
}


//const finalCreateStore = compose(
//  applyMiddleware(thunk),
//  devTools(),
//  persistState(window.location.href.match(/[?&]debug_session=([^&]+)\b/)),
//  createStore
//);
