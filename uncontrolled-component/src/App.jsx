//Uncontrolled Component ref object in class based component

//Example 1
/*import React, { Component, createRef } from 'react'

export default class App extends Component {
  constructor(){
    super();
    this.username=createRef();
    this.password=createRef();
  }
   handleSubmit=(e)=>{
    e.preventDefault();
    let u=this.username.current.value;
    let p=this.password.current.value;
console.log(u,p)
  }
  render() {
    return (
      <>
      <form onSubmit={this.handleSubmit}>
        <input type="text" name="username" id="username" placeholder='Enter Username' onChange={this.handleChange} ref={this.username} />
        <input type="password" name="password" id="password" placeholder='Enter Password' onChange={this.handleChange} ref={this.password}/>
        <button type='submit'>Submit</button>
      </form>
      </>
    )
  }
}
*/

// Example 2

/*import React, { Component, createRef } from "react";
class App extends Component{
  constructor(){
    super();
    this.divRef=createRef();
    
  }
  handleClick=()=>{
    this.divRef.current.style.background="hotpink";
  }
  render(){
    return(
      <>
      <div className="container" onClick={this.handleClick} ref={this.divRef}></div>
      </>
    )
  }
}
export default App;*/

// 
//useRef() Hook in function based component
import React,{useRef} from 'react'

export default function App() {
  let ref=useRef()
  let handleClick=()=>{
    ref.current.style.background="hotpink";  }
  return (
    <div className='container' style={{width:"100px", height:"100px"}} onClick={handleClick} ref={ref}></div>
  )
}


 
