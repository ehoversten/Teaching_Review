/* 

    Given an array and a chunk size, divide the array into many sub-arrays where each sub-array has the specified length

*/

let test = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

// ** Pseudo code ** //
    // Create an empty results array
    // Create an INDEX to keep track of where we are in the given array
    // While INDEX is less than the supplied array LENGTH
        // - Push a SLICE of length SIZE from the given array into our RESULTS array
        // - Increment INDEX by SIZE

function chunkArray(arr, size) {
    let result = [];
    let idx = 0;

    while(idx < arr.length) {
        result.push(arr.slice(idx, idx + size));
        idx += size;
    }

    return result;
}


let res = chunkArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13], 5);

console.log(res);

// ** ANOTHER SOLUTION ** //

// ** Pseudo code ** //
// Create an empty array for our resulting chunked array
// For each element in the original (unchunked) array
    // - Retrieve the LAST element in chunked array
    // - IF the LAST element doesn't exist, or the length is equal to chunk SIZE
        // * Push the new chunk into our chunked result array
    // - ELSE add the current element into the chunk


function chunk(array, size) {
    let chunked = [];

    for(let elem of array) {
        // Grab the last element added to our result array
        let last = chunked[chunked.length - 1];
        console.log(`Last is ${last}`);
        console.log(last);

        if(!last || last.length == size) {
            // create a new ARRAY, add the current element in the for loop and push it onto our result array 
            chunked.push([elem]);
        } else {
            // Add the current element to our sub-chunk
            last.push(elem);
        }
    }
    return chunked;
}

let result = chunk([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13], 2);

console.log(result);



/* 

Reference: https://scotch.io/courses/the-ultimate-guide-to-javascript-algorithms/array-chunking

*/