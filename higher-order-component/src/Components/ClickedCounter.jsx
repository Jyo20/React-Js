import React, { Component } from "react";
import Counter from "./Counter";
 class ClickedCounter extends Component {
  render() {
    let { handlerFun, count, name } = this.props;
    return (
      <>
        <button onClick={handlerFun}>
          {count} {name}
          Times Clicked
        </button>
      </>
    );
  }
}
export default Counter(ClickedCounter)