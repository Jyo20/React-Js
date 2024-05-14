import React, { useReducer } from 'react'

export default function App() {
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
  let [state,dispatch]=useReducer(reducer,{count:0})
  return (
    <>
    <h1>{state.count}</h1>
    <button onClick={()=>{
      dispatch({type:"Increment"})
    }}>Increment</button>
    <button onClick={()=>{
      dispatch({type:"Decrement"})
    }}>Decrement</button>
    
    
    </>
  )
}
