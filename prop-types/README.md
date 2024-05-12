# PropTypes
* PropTypes are used to validate data while passing to another component 
* PropTypes serves as the method you can use to ensure the correct datatype is passed for each prop, meaning whatever is rendered is correct.
* In plain terms, it is used as a validator to ensure the data your component receives is valid.

# How and when should you use PropTypes

When working with function you would pass in argument which when these arguments are not passsed, will through an error or break your application.

when working on large applications for clients and with a team, it is always good to validate these props to avoid unexpected production bugs.

# How to use PropTypes
* Previously, before the release of React v15.5, PropTypes was inbuilt into the React package, but now it has been moved into a different package which you will first have to install into your project to make use of it.

* You can install it in your project by running the following command in your terminal:
```
npm install prop-types
```

* Once it has been installed, you will first have to import it into whichever component you want to use to access its features.
```
import PropTypes from 'prop-types';
```

When you import it into your component, you can now attach the component name to the PropTypes method and create an object containing all your prop's validation.

```
import React from 'react'
import { PropTypes } from 'prop-types'
export default function Child({username,id}) {
  return (
    <>
    <h1>Child Component</h1>
    <h2>USername : {username}</h2>
    <h2>Id :{id}</h2>
    </>
  )
}
Child.propTypes={
     username:PropTypes.string,
     id:PropTypes.number

}

```

In given example we are validate two props ('username' and'id')

* For Uername we are declaring String data type
* For Id we are declaring Number data type.

 # Types of PropTypes

  ## Basic Types
   The basic types are the regular data types you always use in JavaScript. This includes string, number, object, array, boolean, function, and symbol. You can only use them by attaching the PropTypes method.

```
ComponentName.propTypes = {
    anyValue: PropTypes.any, // the prop can be of any data type
    myString: PropTypes.string, // prop should be a string
    myNumber: PropTypes.number, // prop should be a number
    myObject: PropTypes.object, // prop should be an object
    myArray: PropTypes.array, // prop should be an array
    myBoolean: PropTypes.bool, // prop should be boolean
    myFunction: PropTypes.func, // prop should be a function
    mySymbol: PropTypes.symbol, // prop should be a symbol
};
```

If you are entering wrong value other than data type which you are pasing then it will throughs an warning
```
<Child username="XYZ" id={false} />
Child.propTypes={
     username:PropTypes.string,
     id:PropTypes.number // here we are setting propTypes is number but while sending data through props we are passing boolean value 

}
```
Output :
```
App.jsx:8 Warning: Failed prop type: Invalid prop `id` of type `boolean` supplied to `Child`, expected `number`.

```


