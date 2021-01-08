/*

    Merge two sorted arrays together in ascending order

*/


function mergeSortedArrays(arr1, arr2) {
    let result = [];

    if(arr1.length == 0) {
        return arr2;
    }

    if(arr2.length == 0) {
        return arr1;
    }

    // result = arr1.concat(arr2); // --> Combine using Array.concat() method
    result = [...arr1, ...arr2];   // --> Combine using Array spread operator
    result.sort((a, b) => a - b);
    return result;
}


let one = [1, 3, 5, 7, 9];
let two = [0, 2, 4, 6, 8, 10];

let three = [10, 25, 55];
let four = [];

let res = mergeSorted(one, two);
console.log(res);

let res_2 = mergeSorted(three, four);
console.log(res_2);