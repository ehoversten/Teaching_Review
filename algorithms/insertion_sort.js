/* 

    ** Exploring the Insertion Sort Method **

    Write a function called insertionSort() which accepts an UNSORTED array and returns a SORTED array.

    What is the Big(O) of this solution --> Big(O) of O(n^2)

*/ 

function insertionSort(arr) {
    // Loop through our array, starting at INDEX 1
    for(var i = 1; i < arr.length; i++) {
        // Define a variable that keeps track of the current value at INDEX i
        let currentVal = arr[i];
        // Inner loop backwards to compare value of inner loop to current value of outer loop
        for(var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
            // IF value being compared is larger that currentVal in OUTER loop, move value from INNER loop up one spot
            arr[j + 1] = arr[j];
        }
        // Place the next lowest value in its respective spot
        arr[j + 1] = currentVal;
        console.log;
    }
    return arr;
}


let sorted = insertionSort([2, 1, 5, 3, 8, 4, 7, 6]);
console.log(sorted);
