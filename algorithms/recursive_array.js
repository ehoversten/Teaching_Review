/* 

Write a recursive function which takes in an ARRAY of numbers and returns the product of them all.

*/


function productOfArray(array) {
    // let result = array[array.length - 1];
    let result = 1;

    function helper(arr) {
        if(arr.length === 0) {
            console.log("End of Array Values");
            return;
        }

        return result * helper(arr[arr.length - 1])
    }

    helper(array);
    return result;
}

let one = productOfArray([1, 2, 3])
console.log(one);
let two = productOfArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
console.log(two);
let three = productOfArray([10, 20, 30, 40]);
console.log(three);