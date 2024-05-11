# Function  Based Components
 
# Components
React components are same like normal javascript function.

React support component based architecture.

It's reusable bits of code.

we can reuse component n number of times.

Components return HTML element

## Two types of Components.
1) Class Based Component
2) Function Based Component

# Function Component
It will return HTML element

==>fuction based component are stateless.

==> Easy to understand, very less code.

==> You can create function based component using arrow function , normal function also

==> function component take props as an function argument and return data in JSX valid format.

# Syntax  for Named function component

```
function function_Name (){
    return (
        <h1>Hello</h1>
    )
}
export default function_Name;
```

# Syntax  for Arrow function component

```
let funtion_Name=()=>{
    return (
        <h1>Hello </h1>
    )
}
export default function_Name;
```

## How to access states and Other features inside Function Based Component

# Hooks
Its predefined function.
* Hooks are used in only function based components.
it’s a React new feature that allows us to “hook” the functionality into functional components.

## Hooks Rules
1) Hooks can only be called inside function based component.
2) Hooks can be only called at the top  level of component.
3) Hooks can not be conditional. 

# useState() Hook
One of the essential hooks provided by React is the useState() hook, which is used to create the state and update the form. 
* This hook present inside react library/package

* useState() take one argument that is state value and retrun one array with 2 element.
* First array element is state value and second array element is updated function.
* We can pass any data type as state value. 
 
 # Task 
 ==> You have to create two button oe is increment and second is decrement.

 ==> When you click on increment button count value should be incremnet by one 

 ==> if you click on decrement button count value should be decrement by one

 ==> Display count value after the buttons 

 ## Reat Concept useState() hook

 React provides the useState hook to manage state in functional components. 
 It returns a stateful value and a function to update it.
  
  * In this case, count is the state variable, and setCount is the function to update it.

  ```
   let [count,setCount]=useState(0);
   ```
Initializig state value initially 0.


# Event Handling:
 The onClick event handlers are used to trigger state updates when the buttons are clicked. 
 In this case, anonymous arrow functions are used to ensure that the correct setCount function is called when the buttons are clicked.
```
<button onClick={(e)=>{
    setCount(count+1);
   }}>Increment Count </button>

```
 ```
<button onClick={()=>{
    setCount(count-1)
   }}>Decrement Count </button>
 ```
 # Displaying State:
  The current value of count is displayed using JSX within an <h1> element. React will automatically update this part of the UI whenever count changes.

  ```
<h1>count: {count}</h1></>
  ```