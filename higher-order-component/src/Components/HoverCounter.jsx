import React, { Component } from 'react'
import Counter from './Counter';
 class HoverCounter extends Component {
  render() {
    let {handlerFun,count,name}=this.props;
console.log(count)
    return (
      <>
      <button onMouseOver={handlerFun}>{name} {count}</button>
      </>
    )
  }
}
export default Counter(HoverCounter)