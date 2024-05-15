import React, { Component } from 'react'
import ClickedCounter from './Components/ClickedCounter'
import HoverCounter from './Components/HoverCounter'

export default class App extends Component {
  render() {
    return (
      <>
      <ClickedCounter/>
      <HoverCounter/>
      </>
    )
  }
}
