# Props
* props is nothing but properties 
* Using props we can able to transfer properties from one component to another component.
* props are immutable.
* We can transfer any type of data ias props
* We can transfer and receive data using props in both class based and function based components.
* Always data flow will be parent to child
* props return always object.

# How to transfer data from parent to child in class based and function based component

* props come with property name along with the value.
 # Syntax :
 ```
property_name="value";

 ```
# Example :
```
<Child username="Sachin" id="123"/>

```
```
<Child username="Ajay" id="23"/>
```

## Each and every function based component take one argument thats props


# Explanation :
In this example we created App.jsx as an parent component  and im created one more file Child.jsx as child component 

* Im transfering data from parent App.jsx to child Child.jsx 

First we have to import Child.jsx in App.jsx
```
import Child from "./Child";
```
Transfering data from Parent t Child as props
```
<Child username="Sachin" id="123"/>
<Child username="Ajay" id="23"/>
  ```
 Here we are passing username and id as props

 uername and id  is property name represent as key and value will be whatever you are passing. 
## fragment
* Fragment is nothing but a tag which is used to group a set of elements without adding extra nodes to the DOM.
* Its empty tag
# Syntax
```
<> </>
```


# How to receive data in Child Component in function based component

* We can receive data in child component using props.
* Function based component take one argument thats props.

 ```
export default function Child(props) {
  return (
    <>
      <div>Child Component</div>
      <h1> username: {props.username}</h1>
      <h1>Id : {props.id}</h1>
    </>
  );
}
 ```

 # How to receive data in class based component 
 * We can receive data in class based component using this.props
 * In clas based component this refers to the current component that is child component  
 ```
<h1> username: {this.props.username}</h1>
      <h1>Id : {this.props.id}</h1>
 ```

