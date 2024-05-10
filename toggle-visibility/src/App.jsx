
import { useState } from 'react';

function App() {
  let [visible ,setVisible]=useState(false);
  let handleClick=()=>{
    setVisible(!visible);
  }
  return (
    <div>
      <button type='button' onClick={handleClick}> Show/Hide Text</button>
      {visible && <h1>Togggle Me !</h1>}
    </div>
  );
}

export default App;
