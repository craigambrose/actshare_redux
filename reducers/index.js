import { combineReducers } from 'redux';

import * as api from './api';
import * as currentAct from './currentAct';
import * as userSession from './userSession';

export default combineReducers({
  entities: api.entities,
  errorMessage: api.errorMessage,
  currentAct: currentAct.currentAct,
  userSession: userSession.userSession
});

