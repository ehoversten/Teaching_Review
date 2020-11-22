/* Given a sorted array of integers and a target average, determine if there is a pair of values in the array where the average of the pair equals the target average. There may be more than one pair that matches the average target.  */


function avgPair(arr, num) {
    // Fast Fail condition
    if(arr.length < 2) {
        console.log("Array does not have enough numbers to average");
        return false;
    }

    // Create pointers - One at start of ARRAY one at the end
    let left = 0;
    let right = arr.length - 1;

    while(left < right) {
        // Create variable to hold avg value of pair
        let avg = (arr[left] + arr[right]) / 2;
        console.log(`Comparing Pair: ${arr[left]} : ${arr[right]}`);
        console.log(avg);
        // Check if we found a match
        if(avg === num) {
            console.log("Found avg pair matching number");
            return true;
        }
        /* Since our given ARRAY is SORTED if the AVG value is LESS than the value we are trying to match we move our left pointer */
        if(avg < num) {
            // Move left pointer up
            left++;
        }
        /* Since our given ARRAY is SORTED if the AVG value is GREATER than the value we are trying to match we move our right pointer */
        if(avg > num) {
            // Move right pointer back
            right--;
        }
    }
    console.log("No pair matches number")
    return false;
}

avgPair([1, 2, 3], 2.5);
avgPair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8);
avgPair([1], 8);
avgPair([], 8);