import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';
import apiMiddleware from '../middleware/api';
//import loggerMiddleware from 'redux-logger';
import * as reducers from '../reducers';
import { devTools } from 'redux-devtools';

const reducer = combineReducers(reducers);
const createStoreWithMiddleware = applyMiddleware(
  thunkMiddleware,
  apiMiddleware
)(createStore);

//,
//devTools


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
