import {
  ADD_ANSWER,
  RECEIVE_QUESTIONS,
  SAVE_QUESTION,
} from "../actions/questions";

// 3. Reducers : filter & intents of questions
export default function questions(state = {}, action) {
  switch (action.type) {
    case RECEIVE_QUESTIONS:
      return {
        ...state,
        ...action.questions,
      };
    case SAVE_QUESTION:
      return {
        ...state,
        [action.question.id]: action.question,
      };
    case ADD_ANSWER:
      return {
        ...state,
        [action.answerObject.qid]: {
          ...state[action.answerObject.qid],
          [action.answerObject.answer]: {
            ...state[action.answerObject.qid][action.answerObject.answer],
            votes: state[action.answerObject.qid][action.answerObject.answer].votes.concat([action.answerObject.authedUser]),
          },
        },
      };
    default:
      return state;
  }
}
