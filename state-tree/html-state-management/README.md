# Simple State Management

Manage the state of an application requires to create an interface that:

1. stores a data as an state variable
2. provides an API to allow interactions
   - interactions as create/read/update/delete

**This is called: Store.**

## The Store

The store should have four parts

1.  the state
2.  get the state
3.  listen to changes on the state
4.  update the state


## What We're Going to Build
Now that we have an index.html file and all of the JavaScript code has been transferred over to script tags, let's start adding in a User Interface. Since our project has two pieces of state, we'll need two areas:

1. Todo list area
2. Goals area








# Comments from knowledge process
```
/** Simple State Management
 * In order to manage the state of an application
 * It's needed to create an interface that:
 *      1. stores a data as an state variable
 *      2. provides an API to allow interactions
 *         - interactions as create/read/update/delete
 *
 * This is called: Store
 * 
 * 
 * The Observer pattern : "To know (to be ourselfs explicity notify) when the state change"
 * Suscriptions as event driven software for event handling systems.
 * - Wiki: The observer pattern is a software design pattern in which an object, 
 *   named the subject, maintains a list of its dependents, called observers, 
 *   and notifies them automatically of any state changes, 
 *   usually by calling one of their methods.
 * 
 * As a pattern, provides a well-known solution to achive a task,
 * in this case the task is: 
 *    provide a messaging system that fires when an event is met, with listeners to events as conditions to be met, and handlers to react when a condition is fired.
 * 
 * It is an abstraction, which acts as a messaging system driven by events to listen and notify state changes.
 * It provide control about the current status of an state, notifying any manipulation occured at any moment.
 * As a part of this state management system, it is an extra piece that improve the management quality.
 * 
 */
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
    // if(action.type === "ADD_TODO") return state.concat([action.todo])
    // if(action.type === "REMOVE_TODO") return state.filter( todo => todo.id !== action.id)
    // if(action.type === "TOGGLE_TODO") return state.map( todo => todo.id !== action.id ? todo : Object.assign({}, todo, {complete: !todo.complete}))
    // return state
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


/**
 * If state is directly updated the messaging system is never notify
 * that a change has occur. It's needed that the messaging system
 * participate keeping their single task principle. There is the need
 * of an new interface.
 * 
 * So, there is a place where all the handlers are stored,
 * So, there is a place where all the events listeners are stored
 * So, It's needed to an interface where to both things meet,
 * as the addEventListener is It:  addEventListener('event', 'handler')
 */

/** Rules of predictability
 * 1. Only an event can change the state of the store.
 * 2. The fuction that returns the new state needs to be a pure function.
 */

/** Function purity
 * Pure functions: 3 rules
 * 1. Returns the same result if the same arguments are passed in 
 *      + the return of a pure function is only determine by its input values
 * 2. Depends solely on the arguments passed in to them 
 *      + they never access values outside their own scope
 * 3. Does not produce side effects
 *      + It has no interaction with the outside world, such as making network request or mutating a state
 */

/**
 * 1. simpler: less code and less layers as with getters and setters
 * 2. avoid duplicity: an update would require many places to change
 * 3. flexibility: let user decide for each case how data is processed 
 * 4. alignments: agreement about How-To for task achivements
 */

/** Inner Conception of Programming
 * Predictability : limited
 * Single task : a mechanism by pieces
 * Organize : defined behaviour
 * Alignment: agreement about How-To for task achivements
 * Simpler: less code and less layers reducing steps to be done
 */

// 4. update the state
// function todos(state = [], action){
//     if(action.type === "ADD_TODO") return state.concat([action.todo])
//     return state
// }

// store.dispatch({
//     type: 'ADD_TODO',
//     todo: {
//         id:0,
//         name:'How-To Manage State Secure and Predictively'
//     }
// })

// store.dispatch({
//     type: 'ADD_TODO',
//     todo: {
//         id:1,
//         name:'Read book',
//         complete: true
//     }
// })

// store.dispatch({
//     type: 'TOGGLE_TODO',
//     id: 1
// })

// store.dispatch({
//     type: 'REMOVE_TODO',
//     id: 0
// })



// store.dispatch({
//     type: 'ADD_GOAL',
//     goal: {
//         id:0,
//         name:'How-To Manage State Secure and Predictively'
//     }
// })

// store.dispatch({
//     type: 'ADD_GOAL',
//     goal: {
//         id:1,
//         name:'Read book',
//         complete: true
//     }
// })

// store.dispatch({
//     type: 'TOGGLE_GOAL',
//     id: 1
// })

// store.dispatch({
//     type: 'REMOVE_GOAL',
//     id: 0
// })



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
```