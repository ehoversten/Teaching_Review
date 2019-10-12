/* 

    Challenge: Take the input string and return with the first letter capitalized

    Examples:

        input: 'hello world'
        output: 'Hello world'

        input: 'javascript'
        output: 'Javascript'
*/

function capitalized(str) {
    // So we first grab the letter by getting the INDEX at Zero, and uppercase it.
    // Next: we take the the rest of the string (everything after INDEX 0) and add it to the string.
    return str.charAt(0).toUpperCase() + str.slice(1);
}

let cap = 'hello world';
let js = 'javascript';
console.log(capitalized(cap));
console.log(capitalized(js));
