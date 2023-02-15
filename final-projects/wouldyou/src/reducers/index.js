// packages
import { combineReducers } from 'redux'
import { loadingBarReducer } from 'react-redux-loading';

// Reducers
import questions from './questions'
import users from './users'
import authUser from '../reducers/authUser';

export default combineReducers({
  authUser,
  questions,
  users,
  loadingBar: loadingBarReducer
});