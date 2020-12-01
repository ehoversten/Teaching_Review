/* 

    ** Exploring the Bubble Sort Method **

    Write a function called bubbleSort() which accepts an UNSORTED array and returns a SORTED array.

    What is the Big(O) of this solution --> Big(O) of O(n^2)

*/ 


function bubbleSort(arr) {
    // Define a loop that loops through the entire array of values starting at the end of the given array. Starting at the end ensures that we don't recheck values that have already been sorted at the END of the array
    for(let i = arr.length; i > 0; i--) {
        // define an inner loop to compare the current array value with the value we are testing against
        for(let j = 0; j < i - 1; j++) {
            // -- Let's check the values we are comparing -- //
            console.log(arr, arr[j], arr[j+1]);
            // Compare values, which is larger?
            if(arr[j] > arr[j+1]) {
                // IF yes, SWAP values POSITION
                var temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
        console.log("Completed Pass");
    }
    // Once all values have been checked return the SORTED array
    return arr;
}


let sorted = bubbleSort([4, 7, 2, 10, 5, 9, 3]);
console.log(`Sorted Array: ${sorted}`);