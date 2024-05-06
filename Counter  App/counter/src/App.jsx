import React, { useState } from "react";

const App = () => {
  let [counter, setCounter] = useState(0);
  setCounter(counter + 1);
  return (
    <div>
      <h1>Count :{counter}</h1>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
};

export default App;
