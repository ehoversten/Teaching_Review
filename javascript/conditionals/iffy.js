let condition = true;
let condition_a = true;
let condition_b = false;
let condition_c = false;

// basic if statement
if (condition) {
    // code that will execute if condition is true
}


// An if/else statement
if (condition) {
    // code that will execute if condition is true
} else {
    // code that will execute if condition is false
}

// Multiple conditions
if (condition_a) {
    // code that will execute if condition a is true
} else if (condition_b) {
    // code that will execute if condition b is true
} else if (condition_c) {
    // code that will execute if condition c is true
} else {
    // code that will execute if all above conditions are false
}


// A Ternary operation -> ternary operator(? :)
(condition) ? expression on true : expression on false

// ** EXAMPLE ** 
// Set age of user
let age = 20;

// Place result of ternary operation in a variable
const oldEnough = (age >= 21) ? "You may enter." : "You may not enter.";

// Print output
oldEnough;