# React Routes
React Router is a standard library for routing in React. It enables the navigation among views of various components in a React Application, allows changing the browser URL
without the page refreshing, and supports parameterized routing using URL parameters.
React Router is a collection of navigational components that are located in the node_modules folder. The following are the main components of React Router:
- BrowserRouter: It is the parent component of all the other components. It is used to manage the browser history.
- HashRouter: It is used to manage the URL hash.
- Link: It is used to create links between the components.
- NavLink : Its also used to create links between the componnts. but only difference is NavLink will create active class for active link
with the help of that class we can apply css also

- Route: It is used to define the path of the component.
- Switch: It is used to render a single route from the list of routes.
- Redirect: It is used to redirect the user to a different route.
- withRouter: It is used to wrap the component with the router props.
- Route Props: It is used to define the path of the component.
- exact: It is used to match the exact path.
- strict: It is used to match the exact path with the case.
- sensitive: It is used to match the exact path with the case.
- children: It is used to define the child component.
- render: It is used to define the component to be rendered.
- component: It is used to define the component to be rendered.
- path: It is used to define the path of the component.

# steps to used Recat Router
1) Initialize a react project.
2) Install react-router-dom 
```
npm install react-router-dom 
```
3) Importing React Router

* index.jsx
```
import { BrowserRouter } from "react-router-dom";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
```
Here we are making BrowserRouter as parent component 
and App.jsx is child component of BrowserRouter 

4) Importing React and Reacts 
* App.jsx
```
import {Route,Routes} from "react-router-dom"
```

# Example 

The application will contain three components the home component, the About component, and the contact component. 
We will use React Router to navigate between these components.

```
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
  ```