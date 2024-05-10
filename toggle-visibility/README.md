# Create Toggle Visiblity 
Here we ae creating a component that toggles the visibility of a piece of text when a button is clicked 

# Expectations :
==> Initially text sould be hidden.
==> When the button is clicked , the text should be visible.
==> if its visible text should be hidden 
==> use the useState hook to manage the visibility state 

# Recat js Concept

# Conditional rendering 
** React allows us to conditionally render the element based on the condition 
** We using conditional rendering to display or hide the text element based on viibility state.

# Event Handling 
** Reacts support various even handlers , such as onClick which allows us to execute a function when an element is clicked.
** Here we will using onClick event handler to toggle the visibilty state when the button is clicked.

# solution

** Intitialze the state variable visible a false

It indicate that initialy text should be hidden 
```
let [visible ,setVisible]=useState(false);
```

** creating  handleClick function to updat the state variable value 

it will update the state value opposite to !visible that is true /false 
```
let handleClick=()=>{
    setVisible(!visible);
  }
```

** Adding handleClick funtion to button onClick event handler

This function is called every time the button is clicked and toggling the visiblity of the text element.
```
<button type='button' onClick={handleClick}> Show/Hide Text</button>
```

** COndiotional rendering based on the visible state

We use conditional rendering to display the text element only if the isVisible state is true.

```
 {visible && <h1>Togggle Me !</h1>}
```