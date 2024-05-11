import React, { useState } from "react";
import data from "./data.json";
console.log(data)
export default function App() {
  let [products, setProducts] = useState(data);
  return <>

  <ul>
    {
      products.products.map((v,i)=>{
      return <li key={v.id}>{v.title}</li>
      })
    }
  </ul>
  
  </>;
}
