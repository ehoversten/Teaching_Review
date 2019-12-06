/*

    Challenge: Find the Greatest Number in an Array, Create a function that takes an array of numbers and returns the largest number in the array.

    Examples:
        findGreatestNum([34, 15, 88, 2]) // output: 88
        findGreatestNum([34, -345, -1, 100]) // output: 100
        findGreatestNum([-76, 1.345, 1, 0]) // output: 1.345
        findGreatestNum([0.4356, 0.8795, 0.5435, -0.9999]) // output: 0.8795
        findGreatestNum([7, 7, 7]) // output: 7

*/

function findGreatestNum(arr) {
    // Let's start out by creating a max variable and setting it to an easy starting value (at index 0)
    let max = arr[0];

    // Loop through the array of numbers
    for(let i = 0; i < arr.length; i++) {
        // Test value at array index 'i' against current max value
        if(max < arr[i]) {
            // if YES -> Set 'max' to value at arr[i]
            max = arr[i];
        }
        // if NO -> continue looping through values
    }
    return max;
}


const test_arr = [-76, 1.345, 1, 0];
const same_arr = [7, 7, 7];
const deci_arr = [0.4356, 0.8795, 0.5435, -0.9999];

console.log(findGreatestNum(test_arr));
console.log(findGreatestNum(same_arr));
console.log(findGreatestNum(deci_arr));


// Using built-in javascript functions we can make it smaller!
function findGreatestQuick(arr) {
    // using the built-in Math.max function and passing the array in using ES6 spread operator we can make an easy one-liner
    return Math.max(...arr);
}

console.log(findGreatestQuick(deci_arr));
