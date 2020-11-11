// Examples using some Higher-Order Functions

// Base function definition
function func(a, b) {
    return a + b;
}
// Here we are both assigning a function to a variable, AND passing in another function as a PARAMETER to our function definition
let sum = function (a, b, func) {
    return func(a, b);
}

// console.log(func(5, 2));
// console.log(sum(3, 5, func));



// Filter -> Filter out even numbers
let numToTen = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// Filter out the even numbers and only add ODD numbers in our new array variable
let odds = numToTen.filter(function(num) {
    return num % 2 !== 0;
});

// console.log(odds);


// Find (ES6) -> Will return the FIRST item in the array that matches the condition defined in the passed in function
const items = [
    { name: 'a', content: { value: 1 } },
    { name: 'b', content: { value: 2 } },
    { name: 'c', content: { value: 3 } },
    { name: 'd', content: { value: 4 } },
    { name: 'e', content: { value: 5 } }
]

const b = items.find((item) => item.name === 'b');
console.log(b);

let found = items.find(function(item) {
    if(item.name === 'd') {
        return item;
    }
});

console.log(found);

const count = items.reduce((result, { content: { value } }) => result + value, 0)
console.log(count)


// Map -> Create a new array and multiply each element in the original array by 2
let singleArray = [1, 2, 3, 4, 5];

let doubledArray = singleArray.map(function(num) {
    return num * 2;
});

// console.log(doubledArray);


// Reduce -> Sum the values of an array

let numToFive = [1, 2, 3, 4, 5];

function reduction(accumulator, currentValue) {
    return accumulator + currentValue;
}

let reducedArray = numToFive.reduce(reduction, 0);

// console.log(reducedArray);
// A short-hand example using arrow functions
// [1, 2, 3, 4, 5].reduce((a,b) => a + b); // will produce 15



