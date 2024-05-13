# useEffect
* useEffect is a hook that allows you to perform side effects in your funtion based components.
## It accepts two arguments:
1)  a function that contains the side effect logic, 
and 
2) an array of dependencies. 

# Syntax

```
useEffect(<function>, <dependency>)
```
* The function is called when the component is mounted and when any of the dependencies change.
* The dependencies array is optional. 
* If you don't provide it, the function will be called every time the component is rendered.
```
useEffect(() => {
  //Runs on every render
});
```
* If you provide an empty array, the function will be called only once, when the component is mounted.
```
useEffect(() => {
  //Runs only on the first render
}, []);
```
* If you provide an array with dependencies, the function will be called every time one of the dependencies changes.
```
useEffect(() => {
  //Runs on the first render
  //And any time any dependency value changes
}, [prop, state]);


# Effect Cleanup
* When the component is unmounted, the effect function is called with an additional argument, cleanup.
* You can use this to clean up any resources that were created in the effect function.
```
 return ()=>{
      console.log("Unmounting");
    }
    ```