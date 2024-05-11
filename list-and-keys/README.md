# List and Keys

* In React we render list using some loops

* Here we are using map() method to iterate object.
* We can also use for loop to iterate object.

# Keys
* Keys allow React to keep track of elements. 
* his way, if an item is updated or removed, only that item will be re-rendered instead of the entire list.
* key must be unique.
* key is not a property of the object.
* key is a property of the list.
 
 ```
 <li key={v.id}>{v.title}</li>
 ```

 # Note
 When you run code without adding keys in list it will work but it throughs warning that there is no "key" provided for the list items.
 