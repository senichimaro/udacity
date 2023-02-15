import { saveQuestionAnswer } from "../utils/API"

// 2. Sync Actions : users actions as type & hanlder
export const RECEIVE_USERS = 'RECEIVE_USERS'
export const SAVE_USER_ANSWER = 'SAVE_USER_ANSWER'

export function receiveUsers(users){
    return {
        type: RECEIVE_USERS,
        users
    }
}

export function addUserAnswer(answerObject){
    return {
        type: SAVE_USER_ANSWER,
        answerObject
    }
}

export function handlerUserAnswer(answerObject){
    return (dispatch) => {
        return saveQuestionAnswer(answerObject)
                .then(() => dispatch(addUserAnswer(answerObject)))
                .catch((e) => {
                    console.warn('Error in handleSaveQuestion:', e)
                        alert('Error saving the Answer in User. Please try again.')
                    })
    }
}
