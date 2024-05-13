# React Life Cycle Method

* Each component in react has a lifecycle which you can monitor and manipulate during.

# There are Three phases 
1) Mounting Phase
2) Updating Phase
3) Unmounting Phase

# 1) Mounting Phase
* When the component is being rendered in the DOM for the first time.
* When we created component tat that mounting phase is executed.
# There are four Mounting in-built methods while mounting component.
1) constructor()
2) static getDerivedStateFromProps()
3) render()
4) componentDidMount()

# constructor()
* This method is called before the component is rendered.
* This method is used to initialize the state.
* This method is called only once in the component's life.
* This method is not called when the component is updated.
* In constructor super() calling statement must be first statement.

 ```
 constructor() {
    super();
    this.state = { name: "xyz" };
  }
  ```
  # static getDerivedStateFromProps()
  * This method is called right before calling the render method.
  * This method is called on every update.
  * This method is called before calling the getSnapshotBeforeUpdate() method.
  * This method is called before calling the componentDidMount() method.
  * This method take 2 arguments first one is props and second is state.
  * This method returns an object to update the state.
  * If you dont want to update value then return null 
```
static getDerivedStateFromProps(props, state) {
    console.log(props, state);
    console.log("static method");
    return null;
  }
```

# render()
* This method is called right after calling the getDerivedStateFromProps() method.
* This method is called on every update.
* This method is called before calling the componentDidMount() method.
* This method returns JSX elements.
```
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
```
# componentDidMount()
* This method is called right after the component is rendered.
* To perform side effects in class based component this method is used.
```
componentDidMount() {
    console.log("ComponentDidMount Method");
  }
  ```

# 2) Updating Phase
* When the component is being updated in the DOM.
* When we update the state or props that updating phase is executed.

## There are four Updating in-built methods while updating component.
1) static getDerivedStateFromProps()
2) shouldComponentUpdate()
3) render()
4) getSnapshotBeforeUpdate()
5) componentDidUpdate()

# static getDerivedStateFromProps()
* at updates the getDerivedStateFromProps method is called. 
* This is the first method that is called when a component gets updated.

```
 static getDerivedStateFromProps(props, state) {
    console.log(props, state);
    console.log("static method");
    return null;
  }
  ```


# shouldComponentUpdate()
* This method is called right before calling the render method.
* This method called after getDerivedStateFromProps()
* This method is called on every update.
* This method returns boolean value 
* If this method returns true then render method is called.
* If this method returns false then render method is not called.
* This method is used to optimize the performance of the component.
* This method is not called in the initial render.
* Default value is true.
```
shouldComponentUpdate(){
    console.log("shouldComponentUpdate Method");
    return true;
  }
  ```

  #  render()
  The render() method is of course called when a component gets updated, it has to re-render the HTML to the DOM, with the new changes.

# getSnapshotBeforeUpdate()
* It takes two argument thats previous state and previou props.
* meaning that even after the update, you can check what the values were before the update.
* If the getSnapshotBeforeUpdate() method is present, you should also include the componentDidUpdate() method, otherwise you will get an error.
```
getSnapshotBeforeUpdate(prevProp,prevState){
    console.log("getSnapshotBeforeUpdate Method");
    console.log(prevProp,prevState)
    return prevState;
  }
  ```

  # componentDidUpdate()
  * This method is called after the render method.
  * The componentDidUpdate method is called after the update has been rendered in the DOM
  * It takes 3 argument first is props second is state, and third one is data 

# 3) Unmounting Phase
* when a component is removed from the DOM this method is executed.
## React has only one built-in method that gets called when a component is unmounted:
1)  ComponentWillUnmount()
* The componentWillUnmount method is called when the component is about to be removed from the DOM
  
  ```
  componentWillUnmount(){
    console.log("ComponentWillUnmount method");
  }

```
# Example
 Create a React component named App that toggles the visibility of a Child component
 when a button is clicked. Initially, the Child component should be visible using componentWillUnmount().
 ## App.jsx
 ```
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
```
## Child.jsx
```
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
```


