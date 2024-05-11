//Example for state 
/* import React, { Component } from "react";
class App extends Component {
  state = {
    name: "Sachin",
    id: 123,
  };

  render() {
    return (
      <>
        <h1>Name :{this.state.name}</h1>
        <h2>Id :{this.state.id}</h2>
      </>
    );
  }
}
export default App;*/

//Example for constructor

import React, { Component } from "react";
class App extends Component {
  constructor(){
    super();
    this.state={
      name:"sachin",
      id:123
    }
  }

  render() {
    return (
      <>
        <h1>Name :{this.state.name}</h1>
        <h2>Id :{this.state.id}</h2>

      </>
    );
  }
}
export default App;
