import React from 'react'

export default function Navbar({username,id}) {
  return (
    <>
   {
    <div>
       <h1>{username}</h1>
     <h2>{id}</h2>
    </div>
   }
    </>
  )
}
