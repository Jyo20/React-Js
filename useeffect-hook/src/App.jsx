import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

export default function App() {
  let [count,setCount]=useState(0);
  useEffect(()=>{
    console.log("Component Mounting");
    return ()=>{
      console.log("Unmounting");
    }
  },[count]);
  return (
   <>
   <h1>{count}</h1>
   <button onClick={(e)=>{
    setCount(count+1);
   }}>Increment</button>
   <button onClick={(e)=>{
    setCount(count-1)
   }}>Decrement</button>
   </>
  )
}
