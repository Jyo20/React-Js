import React from 'react'
import { Route,Routes } from 'react-router-dom';
import Navbar from './Components/Navbar'
import Home from './Components/Home';
import Contact from './Components/Contact';
import About from './Components/About';
const App=()=>{
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/contact" element={<Contact/>}/>
    </Routes>
    </>
  )
}
export default App;
