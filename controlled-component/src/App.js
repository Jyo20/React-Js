import React, { useState } from "react";

const App = () => {
  let [text, setText] = useState("");
  let handleChange = (e) => {
    setText(e.target.value);
  };
  return (
    <div>
      <input
        type="text"
        name="name"
        id="name"
        placeholder="Enter text"
        onChange={handleChange}
      />
      <h1>Text :{text}</h1>
      <h1> Number Of Characters :{text.length}</h1>
    </div>
  );
};

export default App;
