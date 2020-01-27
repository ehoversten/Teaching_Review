// Working through how sorting works

let arr = [10, 100, 85, 52, 86, 73, 28, 99];
console.log(arr);

// We pass in a callback function that acts as a comparison function
arr.sort(function(a, b) {   // Sort low to high
    return a - b;
});

console.log(arr);

// We pass in a callback function that acts as a comparison function
arr.sort(function (a, b) {   // Sort high to low
    return b - a;
});

console.log(arr);

// Array of Objects example
let arrObj = [
    { name: "Bill", age: 45},
    { name: "Ann", age: 55},
    { name: "Sue", age: 23},
    { name: "Tim", age: 18},
    { name: "Karen", age: 23},
    { name: "Steve", age: 21},
    { name: "Popeye", age: 38},
];

// Let's try to sort the ages of the users
arrObj.sort( function(a, b) {
    return b.age - a.age;
})

console.log(arrObj);