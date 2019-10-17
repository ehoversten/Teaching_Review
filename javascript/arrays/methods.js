

// Some useful JavaScript Array Methods

// ## Array.length() 
//  - This method will give you the number of items in the array
const arr = [5, 6, 7, 8, 9, 10];
console.log(arr.length);  // output: 6



// ## Array.splice(ARR_INDEX, *DELETE_#_ITEMS, *ELEMENT_TO_ADD) 
//  - This method changes the contents of an array by removing or replacing existing elements and/or adding new elements IN-PLACE.
var animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

animals.splice(2, 1); 
console.log(animals);  // output: ['ant', 'bison', 'duck', 'elephant'];

// If you want to see what was removed you can console.log(arr.splice())
console.log(animals(2, 1)); // output: ['duck']

// Here we can add items to the original array at the index given
animals.splice(1, 0, "goat", "lion");
console.log(animals); // output: ["ant", "goat", "lion", "bison", "elephant"]

// Here we can both remove elements from a specified INDEX and insert new elements starting at specified INDEX
animals.splice(0, 2, "hippo");
console.log(animals); // output: ["hippo", "lion", "bison", "elephant"]



// ## Array.slice(START, *END) 
//  - This method will create a shallow copy of the array filled with the elements including START until END(not inculded in array copy, * is optional will default to array.length - 1 )
var animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

// Here we creata a copy of the whole array and store it in a new variable
let animals_copy = animals.slice(); 
console.log(animals_copy);  // output: ['ant', 'bison', 'camel', 'duck', 'elephant']

// Here we create a copy of the original array with only the elements starting from the specified index to the end of the array
let cpy = animals.slice(2);
console.log(cpy);  // output: ["camel", "duck", "elephant"]

// Here we create a copy of the original array with only the elements starting from the specified index to (END - 1) of the array
let part_animals = animals.slice(2, 4);  
console.log(part_animals); // output: ["camel", "duck"]



// ## Array.reverse()
//  - This method reverses the order of the supplied array IN-PLACE (Meaning this will affect the original array supplied)
let numArr = [1, 2, 3, 4, 5];
console.log(numArr);    // output: [1, 2, 3, 4, 5];
let reversedArr = numArr.reverse();
console.log(reversedArr);  // output: [5, 4, 3, 2, 1];
console.log(numArr);    // output: [5, 4, 3, 2, 1];



// ## Array.concat()
//  - This method is used to merge two or more arrays. Method will not modify original array but create a NEW ARRAY
let arr_1 = [1, 2, 3, 4, 5];
let arr_2 = [6, 7, 8, 9, 10];
console.log(arr_1.concat(arr_2));  // output: [1, 2, 3, 4, 5, 6, 7, 9, 10]



// ## Array.forEach() 
//  - This is another method that can help you to loop over an array's items
const arr = [1, 2, 3, 4, 5, 6];

arr.forEach(item => {
    console.log(item); // output: 1 2 3 4 5 6
});


// ## Array.includes() 
//  - This method will check if an array includes the item passed as the parameter

const arr = [1, 2, 3, 4, 5, 6];

arr.includes(2); // output: true
arr.includes(7); // output: false



// ## Array.filter() 
//  - This method will create a new array, with only the elements that passed the condition inside the function
const arr = [1, 2, 3, 4, 5, 6];

// item(s) greater than 3
const filtered = arr.filter(num => num > 3);
console.log(filtered); // output: [4, 5, 6]

console.log(arr); // output: [1, 2, 3, 4, 5, 6]



// ## Array.map() 
//  - This method will create a new array, and perform the operations of the function on every element in the provided array
const arr = [1, 2, 3, 4, 5, 6];

// add one to every element
const oneAdded = arr.map(num => num * 2);
console.log(oneAdded); // output [2, 4, 6, 8, 10, 12]

console.log(arr); // output: [1, 2, 3, 4, 5, 6]


// ## Array.reduce(function(ACCUMULATOR, CURRENT_VALUE) { *LOGIC* });
//  - THis method executes a reducer function (that you provide) on each element of the array, the result is a single output value
let numbers = [1, 2, 3, 4, 5];

let sum = numbers.reduce(function(accumulator, currentVal) {
    return accumulator + currentVal;
})  // output: 15

// Or with ES6 syntax => arrow functions
let product = numbers.reduce((accumulator, currentVal) => accumulator * currentVal);    // output: 120



// ## Array.every(function(PARAMS) { return *TEST_CONDITION* })
//  - This method tests that every  element in the array passes the test condition implemented by the provided function. It returns a Boolean value( true/false )
let nums = [-2, -1, 0, 1, 2];
nums.every(function (element) {
    return element > 0;
})  // output: false

// How about using Arrow Functions
let divByFive = [5, 10, 15, 20, 25, 50];
divByFive.every( (elem) => elem % 5 == 0);  // output: true




// ## Array.some(function(PARAMS) { return *TEST_CONDITION* });
//  - This method tests whether at least one element in the array passes the test condition implemented by the provided function. It returns a Boolean value( true/false )
let nums = [-2, -1, 0, 1, 2];
nums.some(function(element) {
    return element > 0;
})  // output: true


/* 

    A few resources: 
    https://codeburst.io/useful-javascript-array-and-object-methods-6c7971d93230

    https://dev.to/frugencefidel/10-javascript-array-methods-you-should-know-4lk3

*/