/*

    Challenge: Find the Smallest Number in an Array, Create a function that takes an array of numbers and returns the smallest number in the set.

    Examples:
        findSmallestNum([34, 15, 88, 2]) // output: 2
        findSmallestNum([34, -345, -1, 100]) // output: -345
        findSmallestNum([-76, 1.345, 1, 0]) // output: -76
        findSmallestNum([0.4356, 0.8795, 0.5435, -0.9999]) // output: -0.9999
        findSmallestNum([7, 7, 7]) // output: 7

*/

function findSmallestNum(arr) {
    // define a variable to hold value of current smallest value
    let min = arr[0];
    // Loop through the given array
    for(let i = 1; i < arr.length; i++) {
        // check current_smallest variable against current_value of arr[i] in loop
        if(min > arr[i]) {
            // is current_value less than current_smallest value?
            // YES? set new current_smallest to current_value[i]
            min = arr[i];
            // NO? Do nothing, keep looping through array
        }
    }

    // Return smallest_value found
    console.log(min);
    return min;
}

findSmallestNum([34, 15, 88, 2]);
findSmallestNum([34, -345, -1, 100]);
findSmallestNum([0.4356, 0.8795, 0.5435, -0.9999]);


// Using built-in javascript functions
function findSmallestQuick(arr) {
    return Math.min(...arr);
}
