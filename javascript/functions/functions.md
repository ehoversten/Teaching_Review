# Functions

###  A function is a block of code that performs an action or returns a value. Functions are custom bits of reusable code, and can therefore make your programs more modular and efficient.

### So how do we make one?
```javascript
function nameOfFunction() {
    // Code to be executed
}
```
&nbsp;
### The declaration begins with the `function` keyword, followed by the name of the function. Function names follow the same rules as variables — they can contain letters, numbers, underscores and dollar signs, and are frequently written in camel case. The name is followed by a set of `parentheses`, which can be used for optional parameters. The code of the function is contained within curly brackets.
&nbsp; 

```javascript
// Let's Initialize a greeting function
function greet() {
    console.log("Hello, World!");
}   

// Invoke the function
greet();   // -> output: "Hello, World!"
```
&nbsp; 
# Function Parameters:

### A `parameter` is a variable defined by a function, that receives a value when a function is called

### Using `parameters`, we can add additional functionality that will make our code more flexible. Parameters are inputs that get passed into functions as names and behave as local variables.
```javascript
// Initialize custom greeting function
function greet(name) {
    console.log(`Hello, ${name}!`);
}

// Invoke greet function with "Susan" as the argument
greet("Susan");
```
&nbsp; 
## I keep hearing the terms `argument` and `parameter`. Are they the same, are they different? 

* ### `Argument` and `Parameter` are terms associated with functions. The key difference between `argument` and `parameter` is that an `argument` is the data passed at the time of calling a function while a `parameter` is a variable defined by a function that receives a value when the function is called. An `argument` is an actual value while a `parameter` is a placeholder.

```javascript
// When defining a function we pass a PARAMETER to the function and then use that VARIABLE within the function scope
function greet(name) {
    console.log(`Hello, ${name}!`);
}

// When we call/invoke a function we pass in an ARGUMENT to the FUNCTION CALL
greet("Tom");
```
&nbsp;  
# 
### We can also create a `function expression` by assigning a `function` to a `variable`.
```javascript
// Assign ADD function to sum constant
const sum = function add(x, y) {
    return x + y;
}

// Invoke function to find the sum
sum(20, 5);
```

&nbsp;
### We can assign an `anonymous` or unnamed function to a variable.
```javascript
const sum = function(x, y) {
    return x + y;
}

// Invoke function to find the sum
sum(100, 3);
```
&nbsp;
#
## JavaScript Variable Scope:

### The scope of a variable is the region of your program in which it is defined. JavaScript variables have only two scopes.

* ### Global Variables − A global variable has global scope which means it can be defined anywhere in your JavaScript code.

* ### Local Variables − A local variable will be visible only within a function where it is defined. Function parameters are always local to that function.

&nbsp; 

### Within the body of a function, a local variable takes precedence over a global variable with the same name. If you declare a local variable or function parameter with the same name as a global variable, you effectively hide the global variable. Take a look into the following example.


#

### Resources: https://www.digitalocean.com/community/tutorials/how-to-define-functions-in-javascript