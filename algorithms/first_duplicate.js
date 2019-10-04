/*
    Challenge: 
        - Write a function that takes an array of integers as an input and outputs the first duplicate

    Example Output:
        Input: [ 2, 5, 6, 3, 5 ]
        Output: 5

        Input: [ 1, 3, 4, 1, 3, 4 ]
        Output: 1

        Input: [ 2, 4, 5 ]
        Output: undefined
*/

let arr_A = [2, 5, 6, 3, 5];
let arr_B = [1, 3, 4, 1, 3, 4];
let arr_C = [2, 4, 5];

function firstDuplicate(arr) {

    for(let i = 0; i < arr.length; i++) {

        for(let j = i + 1; j < arr.length; j++) {
            if(arr[j] === arr[i]) {
                return arr[j];
            }
        }
    }
    return undefined;
}

// console.log(firstDuplicate(arr_A));
// console.log(firstDuplicate(arr_B));
// console.log(firstDuplicate(arr_C));


// Yields a Big-O of (n^2) ... we can do better ... 

// *** SECOND POSSIBLE SOLUTION *** //
var findDup = function (arr) {
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < i; j++) {
            if (arr[i] === arr[j]) {
                return arr[i];
            }
        }
    }
    return undefined;
}

// Still yeilds a Big-O of (n^2) ...


// *** THIRD POSSIBLE SOLUTION *** //
var firstDupObj = function (arr) {
    // Here we use an OBJECT to keep track of elements from the array
    var dups = {};
    for (var i = 0; i < arr.length; i++) {
        var val = arr[i]
        if (dups[val]) {
            return val;
        }
        else {
            dups[val] = true;
        }
        console.log(dups);
    }
    console.log(dups);
    return undefined;
}

console.log(firstDupObj(arr_A));
console.log(firstDupObj(arr_B));
console.log(firstDupObj(arr_C));

// This solution will yeild a Big-O Time Complexity of (n)