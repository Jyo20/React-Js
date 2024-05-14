# useReducer() Hook
* useReducer() hook is used to manage the state
* useReducer is similar to the useState() hook.
* Its used for building large application.
* It is used to manage complex state.
* Ia allows us for custome state logic.
* useReducer() take 2 arguments
1) Reducer Function
2) State Value

# Syntax 
```
useReducer(reducer_Function,state_value)
```
## useReducer() return one array with two elements .
1) State value
2) dispatch function
     - Whenever we are calling disptach function reducer function will executes.
     - dispatch function is used to update the state.
     - dispatch function takes one argument which is action.
     - action is an object which contains type and payload.
     - type is a string which is used to identify the action.
     - payload is an object which is used to pass the data to reducer function.
     
# Reducer Function
* Reducer function is a function that takes 2 arguments
1) state value
2) action

 # Example




* We define a reducer function that takes state and action as parameters.
```
 let reducer=(state,action)=>{
    switch(action.type){
      case "Increment":
        return {count:state.count+1}
        case "Decrement":
          return {count:state.count-1}
          default:
            return state;
    }
  }
```
*  Depending on the action type, it either increments or decrements the count in the state.
* We use the useReducer hook to create a state and dispatch function based on your reducer function.
```
let [state,dispatch]=useReducer(reducer,{count:0})
```
* The initial state is { count: 0 }.
* We use the dispatch function to dispatch an action with type "increment" or "decrement".
* The reducer function updates the state based on the action type
* In the JSX, you display the current count and provide buttons to trigger the "Increment" and "Decrement" actions, which dispatch the corresponding actions to the reducer.
```
 <h1>{state.count}</h1>
    <button onClick={()=>{
      dispatch({type:"Increment"})
    }}>Increment</button>
    <button onClick={()=>{
      dispatch({type:"Decrement"})
    }}>Decrement</button>
```


