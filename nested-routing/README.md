# Nested Routing
* Nested routing is a feature in React that allows you to define routes within other routes, creating a hierarchy of nested components.
* This can be useful for creating complex applications with multiple levels of navigation.
* To implement nested routing in React, you will need to use the Routes and Route components from the react-router-dom library.

```
import { Route, Routes } from "react-router-dom";
```
 * You can define nested routes by nesting Route components within other Route components.

 # Routes
 * The Routes component is used to define the root of your routing hierarchy. 
 * It can contain one or more Route components.
```
<Routes></Routes>
```
# Route
* The Route component defines a route for your application. 
* It takes two props:
    * path: The path of the route. This is the URL that will trigger the route.
    * element: The component that will be rendered when the route is matched.
* All Route should be wrapped inside Routes
```
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
```

* Use nested routes to create a hierarchy of components that are easy to navigate and maintain.
* Use the outlet prop to render the content of the nested route.
* Use the useParams hook to access the parameters of the nested route.

# Outlet
* The Outlet component is used to render the content of a nested route.
* It is typically used within a Route component to render the content of a nested route.
* The Outlet component will render the content of the nested route that matches the current URL.
* Outlet component should be used in parent component to rendering child component
* Outlet component present inside react-router-dom package.
We need to import  this and then used within component
```
import { Outlet } from 'react-router-dom'
```

- Example
```
  <>
    <div>Users</div>
    <h1>User 1</h1>
    <h1>User 2</h1>
    <h1>User 3</h1>
    <Outlet/>
    </> 
 ```

# useParams()
* The useParams hook is used to access the parameters of a nested route.
* It returns an object with the parameters of the nested route.
* The object is keyed by the name of the parameter.
* The object is updated when the URL changes.
* present inside react-router-dom package
* We need to import  this and then used within component
```
import {useParams} from "react-router-dom";
```
# Example
```
let x=useParams();
console.log(x);
  return (
    <div>UsersDetails : {x.userId}</div>
  )
```
