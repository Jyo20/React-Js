# Props Drilling
Props drilling is a technique that allows you to pass props to a component that is nested inside another component. This is useful when you want to pass props to a component that is not a direct child of the component that is passing the props.

In this Code we are transferring data from App.jsx to Child.jsx to Navbar.jsx

# Disadvantage 
Suppose there are n number of components, and when we need to transfer data from the first component to the last one, using prop drilling requires passing the data through each intermediate component, which can be time-consuming. Additionally, this approach results in passing unnecessary data to all the intermediate components.

* To avoid prop drilling, one solution is to use the Context API.


# App Component
* Its a main component of the application
* It renders the 'Child' Component and passes it props (username) and (id)
```
<Child username="xyz" id={123}/>
```

# Child Component
* It receives props (username) and (id) from its parent component (App.jsx)
```export default function Child({username,id})```

* It renders the 'Navbar' Component and passes it props (username) and (id)
``` <Navbar username={username} id={id}/>```
 * Navbar component is imported and used 'Child' component 

```
import Navbar from './Components/Navbar' ```

# Navbar Component
* It receives props (username) and (id) from parent componet ('Child')
* It renders JSX containing the 'username' and 'id' received from props .