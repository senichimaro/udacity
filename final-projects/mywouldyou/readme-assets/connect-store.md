# Phase A: Step 1 - Connect Store

To connect the store with the data it's needed:

1. Data : `./utils/_DATA.js`
2. Sync Actions : as type & hanlder of tables
      1. users actions as type & hanlder
      2. questions actions as type & hanlder
3. Reducers : filter & intents of data
      1. users(state = {}, action)
      2. questions(state = {}, action)
4. Combine Reducers
5. Asynch Actions : request a Promise by API, then dispatch(others actions)
      1. getInitialData is a Promise which resolves at once and returns { users, questions }
6. Include Thunk : handle function actions with thunk middleware.
7. Connect App : connect the App Component
8. Create Store
      1. import { createStore } from 'redux'
      2. import { Provider } from 'react-redux
      3. import reducers from './reducers'
      3. import middlewares from './middlewares'
9. Connect Store : wrap the App under Provider with store as prop
10. Init : his.props.dispatch(receiveInitialData()) from componentDidMount()