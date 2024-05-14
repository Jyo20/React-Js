import React from "react";
import { Route, Routes } from "react-router-dom";
import NavBar from "./Components/NavBar";
import Home from "./Components/Home";
import About from "./Components/About";
import Contact from "./Components/Contact";
import ProductList from "./Components/Products/ProductList";
import New from "./Components/Products/New";
import Feature from "./Components/Products/Feature";
import Users from "./Components/Users/Users";
import Admin from "./Components/Users/Admin";
import UsersDetails from "./Components/Users/UsersDetails";
import PageNotFound from './Components/PageNotFound';

export default function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<PageNotFound/>}/>
        <Route path="products" element={<ProductList />}>
          <Route path="new" element={<New />} />
          <Route path="feature" element={<Feature/>}/>
        </Route>

        <Route path="/users" element={<Users/>}/>
        <Route path="/:userId" element={<UsersDetails/>}/>
        <Route path="/admin" element={<Admin/>}/>
      </Routes>
    </>
  );
}
