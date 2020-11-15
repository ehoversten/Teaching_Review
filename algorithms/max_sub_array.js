// Using the sliding window pattern


// Find the largest SUM given an ARRAY of numbers and a NUMBER of consecutive values to sum. 

function maxSubArray(arr, num) {
    // Create variables to hold Max and Temp variables
    let maxSum = 0;
    let tempSum = 0;

    // Fast Fail Condition, IF the length of the array is less than the number of elements being summed together
    if(arr.length < num) {
        return null;
    }

    // Loop through the given array up until the provided number of elements to sum
    for(let i = 0; i < num; i++) {
        // Sum the numbers in the ARRAY up to the provided number
        maxSum += arr[i];
    }
    // Set tempSum to maxSum
    tempSum = maxSum;
    for(let i = num; i < arr.length; i++) {
        // Move/Slide the WINDOW up one element
        tempSum = tempSum - arr[i - num] + arr[i];
        // If tempSum is larger than the current value of maxSum, update the value of maxSum
        maxSum = Math.max(maxSum, tempSum);
    }
    console.log(`Max: ${maxSum}`);
    return maxSum;
}


let numArr = [1, 3, 2, 5, 6, 10, 4, 2, 1];

maxSubArray(numArr, 3);
console.log('***********');
maxSubArray(numArr, 2);
console.log('***********');
maxSubArray(numArr, 5);