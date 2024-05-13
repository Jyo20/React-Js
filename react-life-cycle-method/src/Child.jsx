import React, { Component } from 'react'

export default class Child extends Component {
    componentWillUnmount(){
        console.log("ComponentWillUnMount")
    }
  render() {
    return (
      <div>Child</div>
    )
  }
}
