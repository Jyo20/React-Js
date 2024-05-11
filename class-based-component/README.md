# Class Based Components
* Class based components are statefull.
* A class component must include the extends React.Component statement. This statement creates an inheritance to React.Component, and gives your component access to React.Component's functions.
* When creating a React component, the component's name must start with an upper case letter.
# Syntax
```
class componentName extends Components{
    //define states here
    render(){
        return (
            <>
            HTML Element
            </>
        )
    }
}
export default componentName;
```
# render()
* render() method return Html element.
* its mandatory to used inside class baed component

# state
* state are properties which present within the class based component 
* with the help of state we can maintaine the states
* state  is mutable, we can able to change the state value.
* Whenever we change/update the state value component will re-render.

# How to define state value
* We have to define state outside the render() metho.
* State value only in object or null.

# Example :
```
state = {
    name: "Sachin",
    id: 123,
  };
```

# How to access state in class based component
* In class based component to access state value inside render method we have to use this.state 
* this.state refers to the current component

```
render() {
    return (
      <>
        <h1>Name :{this.state.name}</h1>
        <h2>Id :{this.state.id}</h2>
      </>
    );
  }
```
* In given example this refers to the  current component i.e. App Component.


# Other way to define state value  in class based component

# Constructor()

* In a class constructor is a methodthat is automatically called when an object of that class is created. 

# Synatx
```
constructor(){
    super();//super calling statement
    this.state={}/null;

}
```
## Note :
* Its not necessary to have constructor in every component
* Its necessary to have super() within the constructor 

