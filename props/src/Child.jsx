// Receive data in function based component
import React from "react";

export default function Child(props) {
  return (
    <>
      <div>Child Component</div>
      <h1> username: {props.username}</h1>
      <h1>Id : {props.id}</h1>
    </>
  );
}

// Receive data in class based component
import React, { Component } from 'react'

export default class Child extends Component {
  render() {
    return (
        <>
      <div>Child</div>
      <h1> username: {this.props.username}</h1>
      <h1>Id : {this.props.id}</h1>
      </>
    )
  }
}
