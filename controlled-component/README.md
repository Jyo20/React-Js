# Controlled Input Field

Create an input field component that allows a user to type in text and displays the text in real-time and also display number of character in real-time.

==> Every time the user types something in the input field, the text should update in the text element
==> You should use the useState hook to keep track of the text state
==> Display the character count below the textarea in real-time

# Hints

==> You can use the onChange event to keep track of the text in the input field

# Solution

# React JS Concepts:

## Controlled Components:

-- In React controlled component state of the input field is directly controlled by React.
-- In controlled component data is stored in state
-- We have to mandatory used onClick and onSubmit event

# solution

\*\* Initialize state variable as text with an empty string

```
let [text, setText] = useState("");
```

\*\* Create handleChange function
This function take one parameter that is event object.
This function is responsible for update state value with current of the input field

```
let handleChange = (e) => {
    setText(e.target.value);
  };
```

\*\* Calling handleChange function inside input field as onChange Event handler

This function is called every time the input fields value change.

```
<input
        type="text"
        name="name"
        id="name"
        placeholder="Enter text"
        onChange={handleChange}
      />
```

\*\* Display the text
we use text state variable to display the current text in tha text field

```
 <h1>Text :{text}</h1>
```

\*\* Display the count
we use text state variable with length it will return length of characters present inside the text state

```
<h1>Text length :{text.length}</h1>
```
