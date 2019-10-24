/*

    Challenge: Write a function that takes an array of numbers and a function as parameters. The function parameter should return true if the input meets a certain condition or false otherwise. Your function should run the function parameter on every element in the array parameter and , if it returns true, add the element to a new array. Return the new array.

    Example:

    Input: [1,2,3]  function(num){return num === 2}
    Output: [2]

    Input: [1,2,3,4,5,6]  function(num){return num % 2 === 0}
    Output: [2,4,6]

    Input: [1,2,3,4,5,6]  function(num){return num > 3}
    Output: [4,5,6]

*/

// Let's start by Pseudo Coding this!!

// 1) define a function that accepts 2 parameters (arr, func)
//      - given an input, test it against our test_condition
//          * return TRUE;
//          * return FALSE;

function passTesting(arr, func) {
    // let new_array = [];

    // Let's try this with a simple for() loop  // *** THIS WORKS BUT LETS IMPROVE IT ***
    // for(let i = 0; i < arr.length; i++) {
    //     let result = func(arr[i]);
    //     if(result == true) {
    //         new_array.push(arr[i]);
    //     }
    // }
    // return the NEW_ARRAY

    // ** This is how we can use higher order functions and improve the above code
    let new_array = arr.filter( elem => func(elem));
   
    console.log(new_array);
    return new_array;
}
// 2) input FUNCTION is run against every elemnt in the input ARRAY
//      - sounds like a loop or map() function -> loop through each element
//      - test each element against a test_condition
//          * return TRUE -> add element to NEW_ARRAY
//          * return FALSE -> don't add that element to NEW_ARRAY
//      + sounds like we need a NEW_ARRAY variable (let's define this up top!)
//      - return NEW_ARRAY 

const test_array = [5, 2, 7, 9, 3, 1];

function doSomething(input) {
    // we are simply checking to see if any of the input values passed in from the input array are greater or equal to 5
    if(input >= 5) {
        return true;
    } else {
        return false;
    }
}


passTesting(test_array, doSomething);
