// 6. Include Thunk : handle function actions with thunk middleware or raise error: actions must be plain objects.
import thunk from 'redux-thunk'
import { applyMiddleware } from 'redux'
import logger from './logger'

export default applyMiddleware(thunk, logger)