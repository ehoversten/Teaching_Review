
/* 

    - Challenge: Write a function that takes in a string and returns true if it’s a pangram or false otherwise.
        - Pangram: a sentence that contains every letter in the alphabet.

        - Example Input/Output
        Input: “Watch Jeopardy, Alex Trebek’s fun TV quiz game”
        Output: true

        Input: “Five hexing wizard bots jump quickly”
        Output: true

        Input: “JavaScript is the best”
        Output: false


*/


let str_a = "Watch Jeopardy, Alex Trebek's fun TV quiz game";
let str_b = "Five hexing wizard bots jump quickly";
let str_c = "JavaScript is the best";


function isPangramObj(str) {
    let alphabet = {}
    let lowerStr = str.toLowerCase();
    console.log(lowerStr)
    let re = new RegExp(/[a-z]/);
    // console.log(re);

    let charArr = [];
    for(let i = 0; i < str.length; i++){
        if(str[i] !== /[a-z]/) {
            charArr.push(str[i])
        }
    }
    console.log(typeof(charArr));
    console.log(charArr);

    // for(let char of lowerStr) {
    //     if(char == /[a-z]/) {
    //         alphabet[char] = 1
    //     }
    // }
    // console.log(alphabet);
    return undefined;
}

console.log(isPangramObj(str_a));

// Version 2 - Using a String to compare not using an OBJECT

var isPangram = function (str) {
    str = str.toLowerCase();
    var alphabet = "abcdefghijklmnopqrstuvwxyz";
    for (var i = 0; i < alphabet.length; i++) {
        if (!str.includes(alphabet[i])) {
            return false;
        }
    }
    return true;
}


console.log(isPangram(str_a));
console.log(isPangram(str_c));