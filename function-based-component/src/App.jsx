// function Based component 

/*import React from "react";
let App=()=>{
  return (
    <h1>Hello World </h1>
  )
}
export default App;*/

// useState() Hooks 


import React, { useState } from "react";
let App=()=>{
  let [count,setCount]=useState(0);
  return (
   <>
   <button onClick={(e)=>{
    setCount(count+1);
   }}>Increment Count </button>
   <button onClick={()=>{
    setCount(count-1)
   }}>Decrement Count </button>
   <h1>count: {count}</h1></>
  )
}
export default App;