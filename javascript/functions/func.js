// Functions are defined, or declared, with the function keyword.
function nameOfFunction() {
    // Code to be executed
}

/* 
    The declaration begins with the function keyword, followed by the name of the function. Function names follow the same rules as variables — they can contain letters, numbers, underscores and dollar signs, and are frequently written in camel case. The name is followed by a set of parentheses, which can be used for optional parameters. The code of the function is contained in curly brackets 
*/

// Making a Function Declaration

// Initialize greeting function
function greet() {
    console.log("Hello, World!");
}   

// Invoke the function
greet();


// ** FUNCTION PARAMETERS ** //
// Initialize custom greeting function
function greet(name) {
    console.log(`Hello, ${name}!`);
}

// Invoke greet function with "Susan" as the argument
greet("Susan");


// We can also create a function expression by assigning a function to a variable.
// Assign add function to sum constant
const sum = function add(x, y) {
    return x + y;
}

// Invoke function to find the sum
sum(20, 5);

// Assign an anonymous function to sum constant
const sum = function (x, y) {
    return x + y;
}

// Invoke function to find the sum
sum(100, 3);


// ** ARROW FUNCTIONS ** //

/*
    So far, we have gone through how to define functions using the function keyword. However, there is a newer, more concise method of defining a function known as arrow function expressions as of ECMAScript 6. Arrow functions, as they are commonly known, are represented by an equals sign followed by a greater than sign: =>
*/

// Define multiply function
const multiply = (x, y) => {
    return x * y;
}

// Invoke function to find product
multiply(30, 4);
