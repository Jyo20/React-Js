/*import React, { Component } from 'react'
//Class based component 
export default class App extends Component {

constructor(){
  super();
  this.state={username:"",
    password:""
  }
}
handleSubmit=(e)=>{
  e.preventDefault();
  console.log(this.state.username);
  console.log(this.state.password);
}
handleChange=(e)=>{
let {name,value}=e.target;
this.setState({...this.state,[name]:value})
}
  render() {
    return (
      <>
      <form onSubmit={this.handleSubmit}>
        <input type="text" name="username" id="username" onChange={this.handleChange}/>
        <input type="password" name="password" id="password" onChange={this.handleChange}/>
        <button type="submit">Submit</button>
        </form></>
    )
  }
}*/

//Function based Component
import React, { useState } from 'react'

export default function App() {
  let [data,setData]=useState({
    username:"",
    password:"",
    email:""
  })
  let handleChange=(e)=>{
    let {name,value}=e.target;
    setData({...data,[name]:value})
  }
  let handleSubmit=(e)=>{
    e.preventDefault();
    setData({username:"",
    password:"",
    email:""})
    console.log(data)
    
  }
  return (
    <>
    <form onSubmit={handleSubmit}>
      <input type="text" name="username" id="username"  onChange={handleChange}value={data.username}/>
      <input type="password" name="password" id="password"  onChange={handleChange}value={data.password}/>
      <input type="email" name="email" id="email"  onChange={handleChange} value={data.email}/>
      <button>Submit</button>
      </form></>
  )
}

