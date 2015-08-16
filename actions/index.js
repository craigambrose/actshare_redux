import { CALL_API, Schemas } from '../middleware/api';

export const ACT_REQUEST = 'ACT_REQUEST';
export const ACT_SUCCESS = 'ACT_SUCCESS';
export const ACT_FAILURE = 'ACT_FAILURE';

function fetchAct(slug) {
  return {
    [CALL_API]: {
      types: [ACT_REQUEST, ACT_SUCCESS, ACT_FAILURE],
      endpoint: `acts/${slug}`,
      schema: Schemas.ACT
    }
  };
}

export function loadAct(slug) {
  return (dispatch, getState) => {
    return dispatch(fetchAct(slug));
  };
}