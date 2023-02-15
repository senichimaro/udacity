import { saveQuestion, saveQuestionAnswer } from "../utils/API"

// 2. Sync Actions : questions actions as type & hanlder
export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const SAVE_QUESTION = 'SAVE_QUESTION'
export const ADD_ANSWER = 'ADD_ANSWER'

export function receiveQuestions(questions){
    return {
        type: RECEIVE_QUESTIONS,
        questions
    }
} 

export function addQuestion(question){
    return {
        type: SAVE_QUESTION,
        question
    }
}

export function addAnswer(answerObject){
    return {
        type: ADD_ANSWER,
        answerObject
    }
}

export function handleSaveAnswer(answerObject){
    return (dispatch) => {
        return saveQuestionAnswer(answerObject)
                .then(() => dispatch(addAnswer(answerObject)))
                .catch((e) => {
                    console.warn('Error in handleSaveAnswer:', e)
                        alert('Error saving the Answer. Please try again.')
                    })
    }
}

// Async Action
export function handleSaveQuestion(question){
    return (dispatch) => {
        // receive unformattedQuestion
        return saveQuestion(question)
                // return formattedQuestion & save it into the store
                .then((q) => dispatch(addQuestion(q)))
                .catch((e) => {
                    console.warn('Error in handleSaveQuestion:', e)
                        alert('Error saving the Question. Please try again.')
                    })
    }
}
