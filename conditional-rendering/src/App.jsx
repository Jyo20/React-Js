import React, { useState } from 'react'
import Child from './Child'
export default function App() {
  let [isLoggedIn,setIsLogged]=useState(true)
  return (
    <>
    <Child isLoggedIn={isLoggedIn}/>
    </>
  )
}
