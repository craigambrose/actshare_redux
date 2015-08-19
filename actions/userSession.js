import { CALL_API, Schemas } from '../middleware/api';

export const USER_SESSION_REQUEST = 'USER_SESSION_REQUEST';
export const USER_SESSION_SUCCESS = 'USER_SESSION_SUCCESS';
export const USER_SESSION_FAILURE = 'USER_SESSION_FAILURE';

function fetchUserSession() {
  return {
    [CALL_API]: {
      types: [USER_SESSION_REQUEST, USER_SESSION_SUCCESS, USER_SESSION_FAILURE],
      endpoint: `session`,
      schema: Schemas.USER
    }
  };
}

export function loadUserSession() {
  return (dispatch, getState) => {
    return dispatch(fetchUserSession());
  };
}