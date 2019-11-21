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

#### Higher order functions are functions that operate on other functions

Common Higher-Order Functions that we see in javascript and often use in React
* filter
* map
* reduce
* sort



- What are they GOOD for? 
* Composition(?)

