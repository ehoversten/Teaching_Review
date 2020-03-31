"use strict";

let charString = "Hello There!";
// map string to an object
let objString = {};

objString.name = "Brian";


// for(let i = 0; i < charString.length; i++) {

//     if (objString[charString[i]]) {
//         // add char to object
//         objString[charString[i]] += 1;
//     } else {
//         // increment number of occurances of char
//         objString[charString[i]] = 1;
//     }
// }

for(let char of charString) {
    if(!objString[char]) {
        objString[char] = 1;
    } else {
        objString[char] += 1;
    }
}

console.log(objString);