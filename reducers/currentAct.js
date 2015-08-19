import * as ActionTypes from '../actions';

export function currentAct(state = null, action) {
  switch(action.type) {
    case ActionTypes.ACT_REQUEST:
      return null;
    case ActionTypes.ACT_SUCCESS:
      return action.response.result;
    default:
      return state;
  }
}
