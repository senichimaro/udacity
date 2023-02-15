import { RECEIVE_USERS, SAVE_USER_ANSWER } from "../actions/users";

// 3. Reducers : filter & intents of users
export default function users(state = {}, action) {
  switch (action.type) {
    case RECEIVE_USERS:
      return {
        ...state,
        ...action.users,
      };
    case SAVE_USER_ANSWER:
      return {
        ...state,
        [action.answerObject.authedUser]: {
          ...state[action.answerObject.authedUser],
          answers: {
            ...state[action.answerObject.authedUser].answers,
            [action.answerObject.qid]: action.answerObject.answer,
          },
        },
      };
    default:
      return state;
  }
}
