/*

    Exploring the Merge Sort Algorithm 

*/


// ** Pseudo Code ** //
// Create an empty array
// Take a look at the smallest values in each input array
// WHILE there are still values to explore ...
    // * IF the value in the first array is smaller than the value in the second array, push the value in the first array into our results array and move onto the next value in the first array
    // * IF the value in the first array is LARGER than the value in the second array, push the value in the second array into our results array and move onto the next value in the second array
    // * Once we exhaust one array we push the remaining values into our RESULTS array

function merge(arr1, arr2) {
    // Create an empty array to hold our result
    let result = [];
    // Create a pointer for each array
    let i = 0;
    let j = 0;
    // Compare Value in Array 1 to Value in Array 2
    while(i < arr1.length && j < arr2.length) {
        if(arr2[j] > arr1[i]) {
            result.push(arr1[i]);
            // Increment the pointer
            i++;
        } else {
            result.push(arr2[j]);
            // Increment the pointer
            j++;
        }
    }
    // If we have left over values in Array 1 push the rest onto RESULT
    while(i < arr1.length) {
        result.push(arr1[i]);
        i++;
    }
    // If we have left over values in Array 2 push the rest onto RESULT
    while(j < arr2.length) {
        result.push(arr2[j]);
        j++;
    }
    // Return the combined sorted array
    return result;
}

// ** TESTING ** //
// let res = merge([1, 3, 7], [2, 6, 8, 12]);
// console.log(res);

// -- We want to split our array down into 0 or 1 elements, so we can compare each array and MERGE them back together -- //
function mergeSort(arr) {
    if(arr.length <= 1) {
        return arr;
    }
    // Find the mid point (so we can split the given array into two parts)
    let mid = Math.floor(arr.length / 2);
    // Split the array into two parts
    let left = mergeSort(arr.slice(0, mid));
    let right = mergeSort(arr.slice(mid));
    // Compare each element in the two arrays and merge them in sorted order (by calling our merge() helper function)
    return merge(left, right);
}

let test = mergeSort([10, 24, 5, 12, 40]);
console.log(test);

