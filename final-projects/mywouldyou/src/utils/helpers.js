/** New Data object for Users > Leader Board
 */
function newDataObjectForUsers(receiver, included) {
  const uArr = Object.keys(receiver).map((key) => receiver[key]);
  const qArr = Object.keys(included).map((key) => included[key]);

  const newU = uArr.map((user) => {
    /** this line is unmutable because properties */
    let match = qArr.filter((q) => user.id === q.author);
    return {
      ...user,
      questions: match,
    };
  });
  return newU;
}

export function newDataObjectUsers(state) {
  const newU = newDataObjectForUsers(state.users, state.questions);
  return {
    users: newU,
  };
}

// return user data
export function dataObjectUsers(state) {
  return {
    users: dataUsers(state),
  };
}

// return authedUser
export function dataAuthedUser(state) {
  return state.authedUser;
}

// return user
export function dataUsers(state) {
  return state.users;
}

// return questions
export function dataQuestions(state) {
  return state.questions;
}

// User data for Login
export function dataLogin(state) {
  return {
    users: dataUsers(state),
    authedUser: dataAuthedUser(state),
  };
}

export function dataObjectAuthedUser(state) {
  return {
    authedUser: dataAuthedUser(state),
  };
}

// User data for Navigation
export function dataObjectNavigation(state) {
  return {
    users: dataUsers(state),
    authedUser: dataAuthedUser(state),
  };
}

/**
 * Cross user answered question with question id
 * to get two arrays answered/unanswered questions
 */
export function dataQuestionQuality(state) {
  const users = dataUsers(state);
  const questions = dataQuestions(state);
  const authedUser = dataAuthedUser(state);
  let answered = [];
  let unanswered = Object.fromEntries(Object.entries(questions));
  for (const keyU in users[authedUser].answers) {
    answered.push([keyU, questions[keyU]]);
  }
  for (const keyQ in questions) {
    for (const keyU in users[authedUser].answers) {
      if (keyQ === keyU) {
        delete unanswered[keyU];
      }
    }
  }
  return {
    answered: Object.fromEntries(answered),
    unanswered: unanswered,
  };
}

/** Include an Object into a receiver
 * Add to each question, the user data needed.
 * Given two arrays of objects
 * include the user data needed into the first array
 */
function newDataObjectForQuestions(receiver, included) {
  const qArr = Object.keys(receiver).map((key) => receiver[key]);
  const uArr = Object.keys(included).map((key) => included[key]);

  const newQ = qArr.map((q) => {
    let match = uArr.filter((user) => q.author === user.id);
    return {
      ...q,
      /** this line is unmutable because index */
      user: match[0],
    };
  });
  return newQ;
}

export function newDataObjectQuestions(state) {
  const questionQuality = dataQuestionQuality(state);
  return {
    authedUser: state.authedUser,
    unanswered: newDataObjectForQuestions(
      questionQuality.unanswered,
      state.users
    ),
    answered: newDataObjectForQuestions(questionQuality.answered, state.users),
    questions: newDataObjectForQuestions(state.questions, state.users),
  };
}


/**
 * A function that use LocalStorage.setItem('requestURL', this.props.location.pathname)
 * to save the path which fires this.props.history.action === 'POP',
 * then if authedUser is valid, a ternary operator will replace the pathname of RedirectComponent
 * by requestURL
 */

export function saveRequestURL(location){
  localStorage.setItem('requestURL', location)
  return true
}