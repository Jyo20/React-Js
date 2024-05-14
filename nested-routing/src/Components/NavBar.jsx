import React from 'react'
import { NavLink } from 'react-router-dom'
export default function NavBar() {
  return (
    <div className='container'>
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/about"}>About</NavLink>
        <NavLink to={"/contact"}>Contact Us</NavLink>
        <NavLink to={"/products"}>Products</NavLink>
        <NavLink to={"/users"}>Users</NavLink>
    </div>
  )
}
