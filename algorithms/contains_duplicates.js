/*
    Challenge: 
        - Write a function that takes an array of integers as an input and returns TRUE if any values are duplicated in the array

    Example Output:
        Input: [ 2, 5, 6, 3, 5 ]
        Output: True

        Input: [ 1, 3, 4, 1, 3, 4 ]
        Output: True

        Input: [ 2, 4, 5 ]
        Output: False
*/

var containsDuplicate = function(arr) {
    let p1 = 0;
    
    while(p1 < arr.length - 1) {
        
        let p2 = p1 + 1;
        console.log("*****");
        console.log(p1 + " " + p2);
        console.log("*****");
        for(let i = p2; i < arr.length; i++) {
            console.log(arr[p1] + " " + arr[i]);
            if(arr[p1] == arr[i]) {
                console.log(arr[p1]);
                return true;
            }
        }
        p1++;
    }
    return false;
};

// Solution yields a Big-O of (n^2)


function containsDups(nums) {
    let obj = {};
}