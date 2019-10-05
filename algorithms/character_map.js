
// Create a Character Map from a provided string

let inputStr = "How many spaces do you count?";

function characterMap(str, char) {
    let chars = {};

    for(let i = 0; i < str.length; i++) {
        if(!chars[str[i].toLowerCase()]) {
            chars[str[i].toLowerCase()] = 1;
        } else {
            chars[str[i].toLowerCase()] += 1;
        }
    }
    console.log(chars[char]);
    return chars[char];
}

characterMap(inputStr, 's');
characterMap(inputStr, 'm');
characterMap(inputStr, 'h');
characterMap(inputStr, ' ');