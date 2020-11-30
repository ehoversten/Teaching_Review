/* 

    Write a function called binarySearch() which accepts a SORTED array and returns the INDEX at which the value exists.

    What is the Big(O) of this solution --> Big(O) of O(log n)

*/ 


function binarySearch(arr, val) {
    // Outlier Fast Fail Condition
    if(arr.length === 0) {
        console.log("Must provide an array with values");
        return false;
    }

    // Define Initial Pointers
    let left = 0;
    let right = arr.length - 1;
    let middle = Math.floor((left + right) / 2)

    while(arr[middle] !== val && left <= right) {
        console.log(`left: ${left}, middle: ${middle}, end: ${right}`);
        if(val < arr[middle]) {
            right = middle - 1;
        } else {
            left = middle + 1;
        }
        middle = Math.floor((left + right) / 2);
    }
    console.log(`left: ${left}, middle: ${middle}, end: ${right}`);
    if(arr[middle] === val) {
        console.log("Found Value: Index of ", middle);
        return middle;
    }

    console.log("Value is not found in array");
    return -1;

}


binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5);
binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 8);
binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 12);