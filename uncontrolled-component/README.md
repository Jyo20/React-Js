# Uncontrolled Component

An Uncontrolled component in react is ine that stores its own state internally and does not control its value through the react state mechanism.

An Uncontrolled component are the component that are not handle by react state and are handle by the DOM.

* In Uncontrolled Component we have to mandatory used ref Object 

## How to create ref object in class based Component 
* With the help of createRef() method
```
this.username=createRef();
this.password=createRef();
```

## createRef()
* Its a method.
* It not taking any parameter.
* Its present inside react package.
* It will return object with single property that is current.
  current:  Initially it’s set to the null. 
  You can later set it to something else. If you pass the ref object to React as a ref attribute to a JSX node, React will set its current property.

```
<input type="text" name="username" id="username" placeholder='Enter Username' onChange={this.handleChange} ref={this.username} />
```
```
        <input type="password" name="password" id="password" placeholder='Enter Password' onChange={this.handleChange} ref={this.password}/> 
```

# Example two
Create a React component that changes the background color of a div element to "hotpink" when the div is clicked.
 # Explanation

The component has a constructor that initializes the divRef property using the createRef() method from the React library. This is used to reference the DOM node of the div element in the component.
```
constructor(){
    super();
    this.divRef=createRef();
    
  }
```

The component has a method called handleClick(). This method changes the background color of the div element to "hotpink" when the div is clicked.

```
 handleClick=()=>{
    this.divRef.current.style.background="hotpink";
  }
```

In the render() method, the component returns a div element with a className of "container". The div element has an onClick event listener that calls the handleClick() method when the div is clicked. The div element also has a ref attribute that references the divRef property created in the constructor.
```
render(){
    return(
      <>
      <div className="container" onClick={this.handleClick} ref={this.divRef}></div>
      </>
    )
  }
```



# How to create ref object in funtion based Component 

## using useRef() Hook
* useRef is a React Hook that lets you reference a value that’s not needed for rendering.

* useRef returns an object with a single property:

current: Initially, it’s set to the initialValue you have passed. You can later set it to something else. If you pass the ref object to React as a ref attribute to a JSX node, React will set its current property.

* You can mutate the ref.current property. Unlike state, it is mutable. However, if it holds an object that is used for rendering (for example, a piece of your state), then you shouldn’t mutate that object.
* When you change the ref.current property, React does not re-render your component. React is not aware of when you change it because a ref is a plain JavaScript object.
* Do not write or read ref.current during rendering, except for initialization. This makes your component’s behavior unpredictable.
 