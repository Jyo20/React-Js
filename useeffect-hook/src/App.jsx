import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

export default function App() {
  let [count,setCount]=useState(0);
  useEffect(()=>{
    console.log("Component Mounting");
    return ()=>{
      console.log("Unmounting");
    }
  },[count]);
  return (
   <>
   <h1>{count}</h1>
   <button onClick={(e)=>{
    setCount(count+1);
   }}>Increment</button>
   <button onClick={(e)=>{
    setCount(count-1)
   }}>Decrement</button>
   </>
  )
}

// Example two
import React, { useEffect, useState } from "react";

const App = () => {
  let [data, setData] = useState([]);

  useEffect(() => {
    let x = window.fetch("https://fakestoreapi.com/products");
    x.then(
      (d) => {
        d.json().then(
          (v) => {
            setData(v);
            console.log(v);
          },
          (e) => {
            console.log(e);
          }
        );
      },
      (e) => {
        console.log(e);
      }
    );
  }, []);

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th> Title</th>
            <th>Description</th>
            <th>Price</th>
            <th>Image</th>
          </tr>
        </thead>
        <tbody>
          {data.map((v, i) => {
            let { title, id, description, price, image } = v;
            return (
              <tr>
                <td key={i}>{id}</td>
                <td>{title}</td>
                <td>{description}</td>
                <td>{price}</td>
                <td>
                  <img src={image} alt="" />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default App;

// Example Three
import React, { useEffect, useState } from "react";

 const App = () => {
   console.log(window.innerWidth); //return web page width
   let [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
     window.addEventListener("resize", (e) => {
       setWidth(window.innerWidth);
     });
   }, [width]);
   return (
     <div>
       <h1>{width}</h1>
     </div>
   );
 };

 export default App;