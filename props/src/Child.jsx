import React from "react";

export default function Child(props) {
  return (
    <>
      <div>Child Component</div>
      <h1> username: {props.username}</h1>
      <h1>Id : {props.id}</h1>
    </>
  );
}
