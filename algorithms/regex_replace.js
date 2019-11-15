/*

    Challenge: Create a function that takes in a string and a character and replaces every vowel with the given character using RegEx.

    Example:
    replaceVowels("Hello World", #)    // output -> "H#ll# W#rld"

*/ 


function replaceVowels(str, char) {
    // define our variables
    const regEx = /[aeiou]/gi;

    let replacedStr = str.replace(regEx, char);
    console.log(replacedStr);
    return replacedStr;
}


replaceVowels("Hello World", '#');