

// Count the number of occurrences of specified character

let str = "Number of occurrences of character in JavaScript";

// initialize counter
let count = 0;


function numCharacter(char) {
    console.log(char);
    for(let i = 0; i < str.length; i++) {

        if(str[i].toLowerCase() === char) {
            count += 1;
        }
    }
    console.log(count);
    return count;
}

numCharacter('n');





