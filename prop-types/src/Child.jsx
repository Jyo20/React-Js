import React from 'react'
import { PropTypes } from 'prop-types'
export default function Child({username,id}) {
  return (
    <>
    <h1>Child Component</h1>
    <h2>USername : {username}</h2>
    <h2>Id :{id}</h2>
    </>
  )
}
Child.propTypes={
     username:PropTypes.string,
     id:PropTypes.number

}