import React from 'react'
import { NavLink, Outlet } from 'react-router-dom';

export default function ProductList() {
  return (
    <>
    <div>ProductList</div>
    <NavLink to={"/new"}>New</NavLink>
    <NavLink to={"/feature"}>Feature</NavLink>
    <Outlet/>
    </>
  )
}
