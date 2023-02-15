import {
    _getUsers,
    _getQuestions,
    _saveQuestion,
    _saveQuestionAnswer
} from './_DATA'

/** getInitialData
 * Make a request that returns a Promise
 * which resolves at once and returns an object
 * with two properties { users, questions }.
 * @returns {Promise} { users, questions }
 */
export function getInitialData(){
    return Promise.all([
        _getUsers(),
        _getQuestions()
    ]).then( ([users, questions]) => ({
        users,
        questions
    }))
}

/**
 * returns formattedQuestion
 * from receiving unformatted question
 */
export function saveQuestion(unformattedQuestion){
    return _saveQuestion(unformattedQuestion)
}

/**
 * Receives an answer object containing
 * authedUser, qid, answer as option choosen,
 * finally returns res() (probably a promise)
 */
export function saveQuestionAnswer(answerObject){
    return _saveQuestionAnswer(answerObject)
}