/* 

Given an array of integers and a number, write a function which finds the maximum sum of a subarray with the length of the number passed to the function.  

*/

function maxSubarraySum(arr, num) {
    // Create variables to hold max sum and subarray sum
    let max = 0;
    let subSum = 0;

    // Create first loop to sum the subarray 
    for(let i = 0; i < num; i++) {
        max += arr[i];
    }
    console.log(`Temp Max Sum: ${max}`);
    // We have a temp maximum value from summing our first window
    subSum = max;
    // Use second loop to slide/move window and calculate next subarray sum
    for(let j = num; j < arr.length; j++ ) {
        // Slide/Move our window up by one, remove value from front of window and include next value to end of window
        subSum = subSum - arr[j - num] + arr[j];
        console.log(`Temp Sum: ${subSum}`);

        // Check if subSum value is greater than Max Value
        if(subSum > max) {
            // Set new Max value
            max = subSum;
            console.log(`New max is: ${max}`);
        }
    }

    console.log(`Greatest Sum of ${num} numbers is: ${max}`);
    return max;
}


maxSubarraySum([100, 200, 300, 400], 2);
maxSubarraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4);