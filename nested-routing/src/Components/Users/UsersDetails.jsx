import React from 'react';
import {useParams} from "react-router-dom";

export default function UsersDetails() {
let x=useParams();
console.log(x);
  return (
    <div>UsersDetails : {x.userId}</div>
  )
}
