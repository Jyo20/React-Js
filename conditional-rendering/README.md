# Conditional Rendering
Based on some condtion COndition Component rendering is called Conditional rendering

# if else statement
We can use the if else statment JavaScript operator to decide which component to render.

# Parent Component App.jsx
* This is parent component, which is functional component
* This component is responsible for rendering the child component
```
import Child from './Child'

```
* It imports useState from React to manage state within the component.
```
import React, { useState } from 'react'
```
* We initializes a state variable 'isLoggedIn' using the useState hook and sets its initial value to 'false'.
```
 let [isLoggedIn,setIsLogged]=useState(false)
 ```

 This line indicates that user is not login because we are passing state value false.

 * It renders the Child component passing the isLoggedIn state variable as a prop.
 ```
<Child isLoggedIn={isLoggedIn}/>
 ```

 # Child Component CHild.jsx
 * This is child component, which is functional component
 * It receives the 'isLoggedIn' prop from its parent component, 'App'.
 ```
 export default function Child({isLoggedIn}) {}
 ```

 * It conditionally renders different content based on the value of isLoggedIn.
 ```
 *** If isLoggedIn is true, it renders a list with options including "Home", "Products", "About", "User_Name", and "Logout".

 *** If isLoggedIn is false, it renders a list with options including "Home", "Products", "About", "Login", and "Signup".

 ```

 # Ternary Operator 
 * We can use the ternary operator to conditionally render content based on the value of a variable.

 # Child.jsx
```
import React from 'react'

export default function Child({isLoggedIn}) {
    let Guest=()=>{
        return(
            <>
            <li>Signup</li>
            <li>Login</li>
            </>
        )
    }
    let User=()=>{
        return(
            <>
            <li>User_Name</li>
            <li>Logout</li>
            </>

        )
    }
  return (
    <>
    <ul>
       <li>Home</li>
       <li>Products</li>
       <li>About</li>
       {isLoggedIn==true ? <User/>:<Guest/>}
        </ul>
        </>
  )
}

```
 * Two functional components, Guest and User, are defined inside the Child component.
* The Guest component renders list items for "Signup" and "Login".
* The User component renders list items for "User_Name" and "Logout".
* Inside the return statement of the Child component, there's a conditional rendering logic:
* If isLoggedIn is true, it renders the User component.
* If isLoggedIn is false, it renders the Guest component.
***  Regardless of whether the user is logged in or not, the list items for "Home", "Products", and "About" are always rendered.

# Switch Case
* We can use the switch case statement to conditionally render content based on the value of a variable.
* The switch case statement is similar to the ternary operator, but it allows us to handle multiple conditions.
* In this Child component utilizes a switch statement for conditional rendering based on the 'isLoggedIn' prop.
* The syntax for the switch case statement is as follows:

```
import React from 'react'

export default function Child({isLoggedIn}) {
    switch(isLoggedIn){
        case true:
            return(
                <>
                <ul>
                    <li>Home</li>
                    <li>Products</li>
                    <li>About</li>
                    <li>User_Name</li>
                    <li>Logout</li>
                </ul>
                </>
            )
            case false:
                return(
                    <>
                    <ul>
                    <li>Home</li>
                    <li>Products</li>
                    <li>About</li>
                    <li>Login</li>
                    <li>Signup</li>
                    </ul>
                    </>
                )
                default :
                        <></>
    }
   
 
}
```
* The component receives the isLoggedIn prop and uses a switch statement to determine which UI to render based on its value.
* If isLoggedIn is true, it renders a list with options including "Home", "Products", "About", "User_Name", and "Logout".
* If isLoggedIn is false, it renders a list with options including "Home", "Products", "About", "Login", and "Signup".
The default case is included for safety, alth