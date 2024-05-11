import React from 'react'
import Navbar from './Components/Navbar'
export default function Child({username,id}) {
  return (
    <div>
        <Navbar username={username} id={id}/>
    </div>
  )
}
