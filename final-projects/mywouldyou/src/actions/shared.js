import { getInitialData } from '../utils/API'
import { receiveUsers } from './users'
import { receiveQuestions } from './questions'


// 2. Actions: dispatch(others actions)
export function receiveInitialData(){
    return (dispatch) => {
        return getInitialData().then(({users, questions}) => {
            dispatch(receiveUsers(users))
            dispatch(receiveQuestions(questions))
        })
    }
}