import * as ActionTypes from '../actions/userSession';

export function userSession(state = null, action) {
  switch(action.type) {
    case ActionTypes.USER_SESSION_REQUEST:
      return null;
    case ActionTypes.USER_SESSION_FAILURE:
      return {user: null};
    case ActionTypes.USER_SESSION_SUCCESS:
      return {user: action.response.result};
    default:
      return state;
  }
}