/* 

    ** Exploring the Selection Sort Method **

    Write a function called selectionSort() which accepts an UNSORTED array and returns a SORTED array.

    What is the Big(O) of this solution --> Big(O) of O(n^2)

*/ 

function selectionSort(arr) {
    // Loop through the given array
    for(let i = 0; i < arr.length; i++) {
        // define a variable to hold our minimum value's INDEX through each loop iteration
        let min = i;
        console.log(`Min value at INDEX ${min}`);
        // Loop through the remaining unsorted values of our array
        for(let j = i + 1; j < arr.length; j++) {
            console.log(`Comparing ${arr[i]} : ${arr[j]} `);
            // Check if current value is less than OUTER loop VALUE
            if(arr[j] < arr[min]) {
                // Update minimum value INDEX
                min = j;
                console.log(`Temp Min Value ${arr[min]}`);
            }
        }
        // IF the tempMin variable is lower than the current value being checked in the OUTER LOOP, SWAP the values
        if(i !== min) {
            console.log("Swap");
            let temp = arr[i];
            arr[i] = arr[min];
            arr[min] = temp;
        }
        // -- CHECKING ARRAY -- //
        console.log(arr);
    }
    // Return the SORTED ARRAY 
    return arr
}


let sorted = selectionSort([5, 4, 2, 1, 3]);
console.log(sorted);