/* 

    Challenge: Given an array of integers, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.

    Example:

        Input: [0,1,0,3,12]
        Output: [1,3,12,0,0]

    Note:
        * You must do this in-place without making a copy of the array.

    Big-O:
        Time Complexity - O(n)
        Space Complexity - O(1)

*/

function moveZeros(numArr) {
    // Create a pointer
    let p1 = 0;

    // Loop through the elements in the array
    for(let i = 0; i < numArr.length; i++) {
        // When an element is Non-Zero
        if(numArr[i] !== 0) {
            // Place Non-Zero value at pointer location
            numArr[p1] = numArr[i];
            // increment the pointer
            p1++;
        }
    }
    // --> The pointer is now at the index of the last Non-Zero value in the array

    // Loop through the rest of the array and replace all the values with ZERO
    for(let j = p1; j < numArr.length; j++) {
        numArr[j] = 0;
    }
    // Return the Array
    return numArr;
}

// ** TEST ** //
let result = moveZeros([0, 1, 0, 3, 12]);
console.log(result);


// ** A variation of the solution ** //
function moveZeros2(numArr) {
    // Create a pointer
    let p1 = 0;

    // Loop through the elements in the array
    for(let i = 0; i < numArr.length; i++) {
        // When an element is Non-Zero
        if(numArr[i] !== 0) {
            // Swap values
            let temp = numArr[p1];
            numArr[p1] = numArr[i]
            numArr[i] = temp;
            // increment the pointer
            p1++;
        }
    }
    // Return the Array
    return numArr;
}