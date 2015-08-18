import merge from 'lodash/object/merge';
import * as ActionTypes from '../actions';

/**
 * Updates an entity cache in response to any action with response.entities.
 */
export function entities(state = { users: {}, acts: {} }, action) {
  if (action.response && action.response.entities) {
    return merge({}, state, action.response.entities);
  }

  return state;
}

/**
 * Updates error message to notify about the failed fetches.
 */
export function errorMessage(state = null, action) {
  const { type, error } = action;

  if (type === ActionTypes.RESET_ERROR_MESSAGE) {
    return null;
  } else if (error) {
    return action.error;
  }

  return state;
}

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

//export default function selectedAct(state = {}, action) {
//  return {
//    entities: {
//      users: {
//        2: {
//          id: 2,
//          name: 'Coder Jade',
//          avatarUrl: 'http://placekitten.com/g/75/75'
//        },
//        1: {
//          id: 1,
//          name: 'Grandmaster Bob',
//          avatarUrl: 'http://api.adorable.io/avatars/75/2.png'
//        }
//      }
//    },
//    currentAct: {
//      id: '34235r324d2',
//      participants: [
//        {
//          role: 'Dominant',
//          user: 1
//        },
//        {
//          role: 'Submissive',
//          user: 2
//        }
//      ],
//      steps: [
//        {
//          id: 324,
//          type: 'SubmissionVolunteer',
//          actor: 2
//        },
//        {
//          id: 22,
//          type: 'Claim',
//          actor: 1,
//          demand: "I'll call this 'Pot Luck'. I am reposting all of my previous demands all at once. For those who like variety you have a good chance of not getting the same thing twice. If you have been here for a while and been active you may recognize these. Don't be boring and post and old photo. Take a new one. There are 13 in all and I will number them. This is number ## 2 ##.\n\nWhen it is very late tonight take a picture of yourself outside naked. For best results use a flash so you are all nice and bright and the darkness is around you. Right after taking the picture look around to see if anyone saw you. :)"
//        }
//      ]
//    }
//  };
//}