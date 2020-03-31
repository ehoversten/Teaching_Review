# ES6 JavaScript 

## Syntatic Sugar

## Template Literals

They provide us a way to easily embed expressions into strings, by using the `${VARIABLE_NAME}` syntax.

```javascript
let first_name = "Steve";
let last_name = "Smith";
let greeting = `Hello I am ${first_name} ${last_name}`
// output  --> "Hello I am Steve Smith"
let concatenation = "Hello I am " + first_name + last_name;
```

## let, var, and const and Function vs Block Scope

### Variable Scope (var)

Scope in JavaScript refers to the current `execution context` of code, this determines where variable can and cannot be accessed in JavaScript.

* Global variables are those declared outside of a block
* Local variables are those declared inside of a block

Variables declared with the `var` keyword are `function-scoped`, meaning they recognize functions as having a separate `local` scope. Variables declared in functions are not accessible from the global scope.


Keywords `let` and `const` are `BLOCK-scoped`. This means that a new, `local scope` is created from any kind of block, including `function` blocks, `if` statements, and `for` and `while` loops.


&nbsp;   
| Keyword | Scope | Hoisting | Can Be Reassigned Can Be Redeclared ? |
|---------|-------|----------|-------------------------------------|
| var | Function scope | Yes | Yes | Yes |
| let | Block scope | No | Yes | No |
| const | Block scope | No | No | No |

********
** EXAMPLE of var and let in a for() loop
********


## Arrow Functions () => {}

Arrow functions are anonymous

```javascript
var add = function (x,y) {
    return x + y;
}

var add = (x,y) => {
    return x + y;
}
```

Implicit Returns

```javascript
var add = function (x,y) {
return x + y;
}

var add = (x,y) => x + y;
```

Benefits of the arrow function and its implications on execution context.

Arrow functions allows us to “inherit” the scope we’re in if needed

Lexical Scope or Function Scope

Lexical Binding


## Default Parameters

Functions can be initialized with default parameters, which will be used only if an argument is not invoked through the function.

```javascript
function add(a, b = 5) {
    return a + b;
} 

add(4, 8)  // output -> 12
add(3)     // output -> 8
```

## Object Destructuring

Given an object, you can extract just some or all values and put them into named variables for easier naming in your code.

```javascript
let car = {
    make: "Audi",
    model: "A4",
    transmission: "Manual",
    color: "Blue"
}

let { make, color } = car;
console.log(make, color)
// output -> "Audi Blue"
```

## for of Loops

Combines the conciseness of `forEach()` with the ability to break out of the loop at a specified value;


```javascript
//iterate over the value
for (const value of ['a', 'b', 'c']) {
    console.log(value) //value
}

//get the index as well, using `entries()`
for (const [index, value] of ['a', 'b', 'c'].entries()) {
    console.log(index) //index
    console.log(value) //value
}

```

## Rest and Spread

You can expand an array, an object or a string using the spread operator `...`

```javascript
let arr = [1, 2, 3]; 

let newArr = [...arr, 4, 5]; // output -> [1, 2, 3, 4, 5]
// you can create a copy of an array variable
let copy = [...arr]   // output -> [1, 2, 3]

function unknown(...arr) {
    console.log(arr);
}
unknown(1, 2, 3, 4, 5);  // output -> [1, 2, 3, 4, 5]
```

This can come in handy when we know that we will be passing in a number of parameters to a function call, but we don't know how many.

## Promises / Callbacks

## Async / Await


#

## Resources:


* https://www.taniarascia.com/es6-syntax-and-feature-overview/

* https://www.digitalocean.com/community/tutorials/understanding-variables-scope-hoisting-in-javascript#hoisting

* https://flaviocopes.com/es6/


* https://tylermcginnis.com/arrow-functions/


* https://ultimatecourses.com/blog/es6-arrow-functions-syntaxes-and-lexical-scoping

* https://spin.atomicobject.com/2014/10/20/javascript-scope-closures/
