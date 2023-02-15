
function createStore(reducer) {
  /**
   * The store should have four parts
   * 1. the state
   * 2. get the state
   * 3. listen to changes on the state
   * 4. update the state
   * 
   * The store should have a set of rules
   * to increse predictability over state
   * 1. Only an event can change the state of the store
   *        - we can have a collection of events which can occur that change the state
   * 2. Events that change the state are called Actions
   *        - this events are the type of actions that can occur which change the state
   *        - All actions must have a "type" property
   * 3. Creating a collection of the actions that can change the state,
   * if the state changes, one of that actions had occur.
   * 4. update the state : video 10
   */

  // 1. the state
  let state;

  // 2. get the state
  const getState = () => state

  // 3. listen to changes on the state
  let listeners = [];
  const subscribe = (listener) => {
      listeners.push(listener)
      return () => {
          listeners = listeners.filter( l => l !== listener)
      }
  }

  // 4. update the state
  const dispatch = (action) => {
      state = reducer(state, action)
      listeners.forEach( listener => listener())
  }

  return {
      getState,
      subscribe,
      dispatch
  }

}

const ADD_TODO = "ADD_TODO"
const REMOVE_TODO = "REMOVE_TODO"
const TOGGLE_TODO = "TOGGLE_TODO"
const ADD_GOAL = "ADD_GOAL"
const REMOVE_GOAL = "REMOVE_GOAL"
const TOGGLE_GOAL = "TOGGLE_GOAL"

function ADD_TODO_ACTION (todo){
    return {
        type: ADD_TODO,
        todo
    }
}
function REMOVE_TODO_ACTION (id){
    return {
        type: REMOVE_TODO,
        id
    }
}
function TOGGLE_TODO_ACTION (id){
    return {
        type: TOGGLE_TODO,
        id
    }
}
function ADD_GOAL_ACTION (goal){
    return {
        type: ADD_GOAL,
        goal
    }
}
function REMOVE_GOAL_ACTION (id){
    return {
        type: REMOVE_GOAL,
        id
    }
}
function TOGGLE_GOAL_ACTION (id){
    return {
        type: TOGGLE_GOAL,
        id
    }
}

// 4. update the state
function todos(state = [], action){
    switch(action.type){
        case "ADD_TODO": return state.concat([action.todo])
        case "REMOVE_TODO": return state.filter( todo => todo.id !== action.id)
        case "TOGGLE_TODO": return state.map( todo => todo.id !== action.id ? todo : Object.assign({}, todo, {complete: !todo.complete}))
        default: return state
    }
}
function goals(state = [], action){
    switch(action.type){
        case "ADD_GOAL": return state.concat([action.goal])
        case "REMOVE_GOAL": return state.filter( goal => goal.id !== action.id)
        case "TOGGLE_GOAL": return state.map( goal => goal.id !== action.id ? goal : Object.assign({}, goal, {complete: !goal.complete}))
        default: return state
    }
}

function app(state = {}, action){
    return {
        todos: todos(state.todos, action),
        goals: goals(state.goals, action)
    }
}

const store = createStore(app)

// 3. listen to changes on the state
store.subscribe(() => {
    console.log("The new state is:", store.getState())
})


// TODOS
store.dispatch(ADD_TODO_ACTION({
    todo: {
        id:0,
        name:'How-To Manage State Secure and Predictively'
    }
}))
store.dispatch(ADD_TODO_ACTION({
    todo: {
        id:1,
        name:'Read book',
        complete: true
    }
}))
store.dispatch(TOGGLE_TODO_ACTION(1))
store.dispatch(REMOVE_TODO_ACTION(0))




// GOALS
store.dispatch(ADD_GOAL_ACTION({
    goal: {
        id:0,
        name:'How-To Manage State Secure and Predictively'
    }
}))
store.dispatch(ADD_GOAL_ACTION({
    goal: {
        id:1,
        name:'Read book',
        complete: true
    }
}))
store.dispatch(TOGGLE_GOAL_ACTION(1))
store.dispatch(REMOVE_GOAL_ACTION(0))
