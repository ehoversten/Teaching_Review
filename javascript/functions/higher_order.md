# Higher Order Functions

## What is Functional Programming?

Functional Programming is a form of programming in which you can pass functions as parameters to other functions and also return them as values.

- Languages such as: JavaScript, Haskell, Clojure, Scala, and Erlang are functional programming langauges.

&nbsp;  
### And that means...?
* A `function` that takes another `function` as its argument

```javascript
function func(a, b) {
    return a + b;
}

let sum = function(a, b, func) {
    return func(a, b);
}

console.log(sum(3, 5, func));  // output: 8
```

&nbsp;  
## What are First-Class Functions (Citizens)?

In computer science, a programming language is said to support first-class functions (or function literal) if it treats functions as first-class objects. Specifically, this means that the language supports constructing new functions during the execution of a program, storing them in data structures, passing them as arguments to other functions, and returning them as the values of other functions.

Sooooo.... just like any other variable(?)

* A function is an instance of the Object type
* A function can have properties and has a link back to its constructor method
* You can store the function in a variable
* You can pass the function as a parameter to another function
* You can return the function from a function

&nbsp;  
## `Functions` are `Values`

### Assigning Functions to Variables
```javascript
// We can set a function definition to a variable
var triple = function(x) {
    return x * 3;
}
// invoke the function variable
triple(3);  // output: 9
```
### We can also pass them around
```javascript
let passedFunc = triple;

passedFunc(4);   // output: 12
```

### Passing as a Parameter
```javascript
function func(a, b) {
    return a + b;
}

let sum = function(a, b, func) {
    return func(a, b);
}

console.log(sum(3, 5, func));  // output: 8
```

## So what are Higher-Order Functions?

### Higher order functions are functions that operate on other functions.

Common Higher-Order Functions that we see in javascript and often use in React
* filter
* map
* reduce
* sort

&nbsp;  
### Filter: `Array.prototype.filter()`
`filter()` allows us to pick which elements of the array should remain in the transformed list by passing a filtering function that returns a Boolean value (true/false). 

* Slightly Simplified: The filter() method `creates a new array` with all elements that pass the test implemented by the provided function.

```javascript
function isAboveMyRange(value) {
  return value >= 25;
}

var filtered = [12, 5, 8, 130, 44].filter(isAboveMyRange);
// filtered is [130, 44]
```



&nbsp;  
### Map: `Array.proptotype.map()`
`map()` is used if we want to perform the same change on each member of the array. It takes the function that should be applied to each element of the array as a parameter.

* Slightly Simplified: The map() method `creates a new array` with the results of calling a provided function (or callback) on every element in the calling array.

```javascript
var numbers = [1, 4, 9];

var doubles = numbers.map(function(num) {
  return num * 2;
});

// doubles is now [2, 8, 18]
// numbers is still [1, 4, 9]
```
&nbsp;  
### Reduce: Array.prototype.reduce()

### The `reduce()` method executes the callback function on each member of the calling array, and results in a `single output value`. 

The reduce() method takes in two input parameters:

* The reducer callback function (making this method a higher-order function)
* Optional initial value

```javascript
// Syntax
arr.reduce(callback[, initialValue]);
```
&nbsp;  
The reducer function (callback) accepts four parameters:

* accumulator
* currentValue
* currentIndex
* sourceArray

If an initialValue is provided, then the accumulator will be equal to the initialValue, and the currentValue will be equal to the first element in the array. Suppose no initialValue is provided, then the accumulator will be equal to the first element in the array and the currentValue will be equal to the second element in the array.


```javascript
let reducerFunction = function(accumulator, currentValue) {
    return accumulator + currentValue;
}

var sum = [0, 1, 2, 3].reduce(reducerFunction, 0);
// output: sum is 6
```

&nbsp;   
#

### Resources: 

* https://blog.bitsrc.io/understanding-higher-order-functions-in-javascript-75461803bad

Traversy Media: Great quick walk through using higher-order functions
* https://www.youtube.com/watch?v=rRgD1yVwIvE

Video Playlist for a deeper understanding:
* https://www.youtube.com/playlist?list=PL0zVEGEvSaeEd9hlmCXrk5yUyqUag-n84

Mosh Hamedami:
* https://programmingwithmosh.com/javascript/what-are-higher-order-functions-in-javascript/



