import React, { Component } from "react";

export default function Counter(WrappedComponent) {
  class NewComponent extends Component {
    constructor() {
      super();
      this.state = { count: 0 };
    }
    handleClick=()=>{
      this.setState({count:this.state.count+1})
      console.log(this.state.count+1)
    }
    render() {
      return (
       
          <WrappedComponent
            count={this.state.count}
            handlerFun={this.handleClick}
            {...this.props}
          />
       
      );
    }
  }
  return NewComponent;
}
