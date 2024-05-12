import React from "react";
import Child from "./Child";

export default function App() {
  return (
    <>
      <Child username="ABC" id={20} />
      <Child username="PQR" id={30} />
      <Child username="XYZ" id={40} />
    </>
  );
}
