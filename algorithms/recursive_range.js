/* 

Write a function which accepts a number and adds up all the numbers from 0 up to the number passed to the function.

*/ 


function recursiveRange(num) {
    if(num === 0) {
        return 0;
    }

    return num + recursiveRange(num - 1);
}


let a = recursiveRange(3);
console.log(a);
let b = recursiveRange(10);
console.log(b);
let c = recursiveRange(100);
console.log(c);