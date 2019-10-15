/* 

    Challenge: Write a function that takes 2 parameters - the first is an array, the second is an element that may or may not be in the array. 
    
    ** Without using any built in array methods, return true if the element is in the array or false otherwise.

        Examples:
        Input: [1,2,3]  1
        Output: true

        Input: [1,2,3]  4
        Output: false

        Input: ['code', 'dev', 'nerd']  'nerd'
        Output: false

        Input: ['code', 'dev', 'nerd']  'genius'
        Output: false

*/

function checkArray(arr, str) {
    for(let i = 0; i < arr.length; i++) {
        console.log(`Index is: ${i} | Element is: ${arr[i]}`);
        if(arr[i] === str) {
            console.log('found');
            return true;
        }
    }
    console.log('Not found');
    return false;
}

let checkArr = ['code', 'dev', 'nerd'];
checkArray(checkArr, 'nerd');
checkArray(checkArr, 'genius');
