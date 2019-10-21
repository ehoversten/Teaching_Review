/* 

    Challenge: Write a function that takes an array of numbers and a function as parameters. The function paremeter should do something to a numbers (increment, double, decrement, etc) and return the result. Your function should return the array that results from applying the function parameter to each element in the number array.

    Example:
        Input: [1,2,3]  function(num){return num * 2*}
        Output: [2,4,6]
        Input: [1,2,3]  function(num){return num + 1}
        Output: [2,3,4]
        Input: [1,2,3] function(num) {return num /2}
        Output: [.5, 1. 1.5]
        Input: [1,2,3] function(num) {return num - 2}
        Output: [-1, 0, 1]

*/

function mapArray(arr, func) {
    console.log(arr);
    let newArr = arr.map(elem => func(elem));
    console.log(newArr);
    return newArr;
} 

 let test = [1, 2, 3, 4, 5];

 function timesTwo(num) {
    return num * 2;
 }

 let returnTest = mapArray(test, timesTwo);

 console.table(returnTest);



// More complex functions to pass in. Will require a refactor of our code to be able to impletement these.
function sum(a, b) {
    return a + b;
}

function product(x, y) {
    return x * y;
}