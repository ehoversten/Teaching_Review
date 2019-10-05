

// Count the number of occurances of specified character

let str = "Number of occurances of character in JavaScript";

// initalize counter
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





