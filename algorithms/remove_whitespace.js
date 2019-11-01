/*

    Challenge: Write a function that takes in a string and and returns the string with white space removed and all letters changed to lowercase . This is a common task when a variable, routeName, etc needs to be created from user input.

    Example:
    Input: Tammer Galal
    Output: tammergalal

    Input:    favorite tree    ever
    Output: favoritetreeever

    Input: one word
    Output: oneword

*/ 


function rmvSpaces(str) {
    let temp = '';
    let lower = str.toLowerCase().trim();
    for(let i = 0; i < str.length; i++) {
        if(str[i] !== ' ') {
            temp += str[i];
        }
    }
    console.log(temp);
    return temp.toLowerCase();
}

rmvSpaces("  Tammer Galal   ");


// Another solution using the .replace() function

var singleWord = function (str) {

    var newStr = str.toLowerCase().replace(/\s/g, '')

    return newStr;
}

singleWord("One Word");