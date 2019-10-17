# Arrays

### An array can hold multiple values within a single variable. This means that you can contain a list of values within an array and iterate through them.

### Each item or value that is inside of an array is called an element. You can refer to the elements of an array by using an index number.

### Just as strings are defined as characters between quotes, arrays are defined by having values between square brackets [ ].
#
#### An array of strings, for example, looks like this:
```javascript
let fish = ["shark", "cuttlefish", "clownfish", "eel"];
```

#### - If we call the variable fish, we’ll receive the following output:
```javascript
console.log(fish);

$> ["shark", "cuttlefish", "clownfish", "eel"];
```

#### Arrays are a very flexible data type because they are mutable in that they can have element values added, removed, and changed.

#


## Indexing Arrays

#### Arrays do not have name/value pairs. Instead, they are indexed with integer values beginning with 0.


#### - We can find out how many items are in an array with the length property.
```javascript
$> fish.length;

output -> 4
```

#### - If we want to find out the index number of a specific item in an array, such as clownfish, we can use the indexOf() method.
```javascript
$> fish.indexOf("clownfish");

output -> 2
```

#


## Accessing Items in an Array

#### An item in a JavaScript array is accessed by referring to the index number of the item in square brackets.
```javascript
fish[1];

output -> "shark"
```


#### Attempting to access an item that doesn't exist will return undefined.
```javascript
fish[10];

output -> undefined
```

#### In order to access items in a nested array, you would add another index number to correspond to the inner array.
```javascript
let nestedArray = [
    [
        "salmon",
        "halibut",
    ],
    [
        "coral",
        "reef",
    ]
];

nestedArray[1][0];

output -> 'coral'
```

#

## Adding an Item to an Array

#### In our fish variable we had five items, which consisted of the indices from 0 to 4. If we want to add a new item to the array, we can assign a value to the next index.

```javascript
fish[5] = "squid";

output -> ["shark", "cuttlefish", "clownfish", "eel", "squid"]
```


#### We can also use a built-in javasript array method to add data to the array. 

Using the push() method, we add an item to the end of an array.

```javascript
fish.push("whale");

output -> ["shark", "cuttlefish", "clownfish", "eel", "squid", "whale"]
```

Using the unshift() method will add an item to the beginning of an array.
```javascript
fish.unshift("lobster");

console.log(fish);

output -> ["lobster", "shark", "cuttlefish", "clownfish", "eel", "squid", "whale"]
```

#


## Modifying Items in Arrays

#### We can overwrite any value in an array by assigning a new value using the assignment operator, just like we would with a regular variable.

```javascript
fish[0] = "manatee";

output -> ["manatee", "shark", "cuttlefish", "clownfish", "eel", "squid", "whale"]
```

#### Another way to modify a value is using the splice() method with a new parameter. If we wanted to change the value of clownfish, which is the item at index 3, we could remove it and add a new item in its place.

```javascript
fish.splice(3, 1, "sea lion");

output -> ["manatee", "shark", "cuttlefish", "sea lion", "eel", "squid", "whale"]
```

var removedItems = fish.splice(pos, n); 
// this is how to remove items, n defines the number of items to be removed,
// from that position(pos) onward to the end of array.
