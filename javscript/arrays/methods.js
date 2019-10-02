

// Some useful JavaScript Array Methods

// Array.forEach() - This is another method that can help you to loop over an array's items
const arr = [1, 2, 3, 4, 5, 6];

arr.forEach(item => {
    console.log(item); // output: 1 2 3 4 5 6
});


// Array.includes() - This method will check if an array includes the item passed as the parameter

const arr = [1, 2, 3, 4, 5, 6];

arr.includes(2); // output: true
arr.includes(7); // output: false


// Array.filter() - This method will create a new array, with only the elements that passed the condition inside the function
const arr = [1, 2, 3, 4, 5, 6];

// item(s) greater than 3
const filtered = arr.filter(num => num > 3);
console.log(filtered); // output: [4, 5, 6]

console.log(arr); // output: [1, 2, 3, 4, 5, 6]


// Array.map() - This method will create a new array, and perform the operations of the function on every element in the provided array
const arr = [1, 2, 3, 4, 5, 6];

// add one to every element
const oneAdded = arr.map(num => num * 2);
console.log(oneAdded); // output [2, 4, 6, 8, 10, 12]

console.log(arr); // output: [1, 2, 3, 4, 5, 6]


// Array.reduce() 
    // ....