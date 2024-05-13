import React, { Component } from "react";

export default class App extends Component {
  // first step is constructor
  constructor() {
    super();
    this.state = { name: "xyz" };
  }
  // 2nd is static getDerivedStateFromProps() method
  static getDerivedStateFromProps(props, state) {
    console.log(props, state);
    console.log("static method");
    return null;
  }
  // 3rd is render method
  render() {
    return (
      <div>
        <h1>Hello {this.state.name}</h1>
        <button
          onClick={(e) => {
            this.setState({ name: "pqr" });
          }}
        >
          Change
        </button>
      </div>
    );
  }
  // 4th is componentDidMount() method
  componentDidMount() {
    console.log("ComponentDidMount Method");
  }
  //updating phase
  //2nd 
  shouldComponentUpdate(){
    console.log("shouldComponentUpdate Method");
    return true;
  }
  //3rd Phase is render
  //4th is getSnapshotBeforeUpdate()
  getSnapshotBeforeUpdate(prevProp,prevState){
    console.log("getSnapshotBeforeUpdate Method");
    console.log(prevProp,prevState)
    return prevState;
  }
  componentDidUpdate(prop,state,data){
    console.log("componentDidUpdate Method");
    console.log(data)
  }

  //Unmounting phase
  componentWillUnmount(){
    console.log("ComponentWillUnmount method");
  }
}

// Unmouting Example
import React, { Component } from "react";
import Child from "./Child";
export default class App extends Component {
  constructor() {
    super();
    this.state = {
      display: true,
    };
  }
  handleClick = () => {
    this.setState({
      display: !this.state.display,
    });
  };
  render() {
    let { display } = this.state;
    return (
      <>
        {display ? <Child /> : null}
        <button onClick={this.handleClick}>Click</button>
      </>
    );
  }
}


// How to perform sideEffects in clasbased componet
// componentDidMount()
import React, { Component } from "react";

export default class App extends Component {
  constructor() {
    super();
    this.state = { data: [] };
  }
  componentDidMount() {
    let data = fetch("https://fakestoreapi.com/products");
    data.then(
      (d) => {
        d.json().then((v) => {
          this.setState({ data: v });
        });
      },
      (e) => {
        console.log(e);
      }
    );
  }
  componentDidUpdate() {
    console.log("ComponentDidUpdate");
  }
  render() {
    let { data } = this.state;
    return (
      <>
        <table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Title</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {data.map((v,i)=>{
              let {title,id,price}=v
              return(
                <tr>
                  <td key={i}>{id}</td>
                  <td>{title}</td>
                  <td>{price}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </>
    );
  }
}
