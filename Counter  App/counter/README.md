# Getting Started with Counter App

# Problem Statement:

Create a simple counter component that increments a number every time a button is clicked. The component should update the displayed number accordingly.

## Expectations:

Every time the button is clicked, the number should increment by 1

Display the current number state in the text element

# Key ReactJS Concepts:

==> Event Handling: React supports various event handlers, such as onClick, which allows you to execute a function when an element is clicked. In this exercise, we'll use the onClick event handler to increment the counter when the button is clicked.

# Solution

# Initialize state variable # count # to 0

==> Here we used useState Hooks to manage the states and set the initaial value to 0
`- diff const [count, setCount] = useState(0)`

<!-- ```diff
- text in red
+ text in green
! text in orange
# text in gray
@@ text in purple (and bold)@@
``` -->
