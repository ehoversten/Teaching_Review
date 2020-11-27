/* 

Write a recursive function which takes in an ARRAY of numbers and returns the product of them all.

*/

function productOfArray(arr) {
    if(arr.length === 0) {
        return 1;
    }
    // Using the ARRAY.slice() method to remove one number from the array each time through our recursive loop
    return arr[0] * productOfArray(arr.slice(1));
}

let one = productOfArray([1, 2, 3]);
console.log(one);
let two = productOfArray([1, 2, 4, 10])
console.log(two);
let three = productOfArray([10, 20, 30, 40]);
console.log(three);



// -- Exploring the ARRAY.slice() method to remove values from an array -- //
let sum = [1, 2, 3, 4, 5];
console.log(sum);
let nine = sum.slice(1);
console.log(nine)
let eight = nine.slice(1);
console.log(eight)
let seven = eight.slice(1);
console.log(seven)
let six = seven.slice(1);
console.log(six);
let five = six.slice(1);
console.log(five);
// -------------------------------------- //