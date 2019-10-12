/*
    Challenge: Write a function that takes a string as a parameter and determines if it is a valid password with the following 
    
    Constraints:

        1. It must be at least 8 characters long
        2. It must contain at least 1 capital letter
        3. It must contain at least 1 lower case letter

        Output true if the string is a valid password or false otherwise.

        Examples:
        Input: RexTheDog
        Output: true

        Input: rexthedog
        Output: false

        Input: REXTHEDOG
        Output: false

        Input: Dog
        Output: false
*/ 

let password = "RexTheDog";
let password_1 = "rexthedog";
let password_2 = "REXTHEDOG";


var isValidPass = function(password) {
  var hasLower = false;
  var hasUpper = false;

  if (password.length < 8) {
    return false;
  }

  for (var i = 0; i < password.length; i++) {
    if (password[i].toLowerCase() === password[i]) {
      hasLower = true;
    }
    if (password[i].toUpperCase() === password[i]) {
      hasUpper = true;
    }
  }

  return hasLower && hasUpper;
};

console.log(isValidPass(password));
console.log(isValidPass(password_1));
console.log(isValidPass(password_2));



// How about a solution using RegEX
function validPass(str) {
    let regCap = /[A-Z]/;
    let regLow = /[a-z]/;
    let temp = str.split("")
    if(str.length >= 8 && str.match(regCap) && str.match(regLow)) {
        return true;
    }
    return false;
}


console.log(validPass(password));
console.log(validPass(password_1));
console.log(validPass(password_2));