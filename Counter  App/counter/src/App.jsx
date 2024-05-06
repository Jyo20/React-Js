import React, { useState } from "react";

const App = () => {
  let [count, setCounter] = useState(0);
  let handleClick=()=>{
    setCounter(count + 1);
  }
  return (
    <div>
      <h1>Count :{count}</h1>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
};

export default App;
