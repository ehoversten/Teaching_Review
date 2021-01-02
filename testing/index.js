// Here we will be writing our basic functions that we will be running tests on

// ------------------------------------------- //
// - Basic math type function definitions      //
// ------------------------------------------- //
function add(a, b) {
    return a + b;
}


function subtract(a, b) {
    return a - b;
}


function product(a, b) {
    return a * b;
}


function divide(a, b) {
    return a / b;
}


// --------------------------------------------------------- //
// - Basic function definitions using conditional statements //
// --------------------------------------------------------- //

function isOdd(num) {
    if(num % 2 !== 0) {
        return true;
    }
    return false;
}


function isEven(num) {
    if(num % 2 === 0) {
        return true
    }
    return false;
}


// --------------------------------------------------------- //
// - Basic function definition to create a new User object   //
// --------------------------------------------------------- //
function addUser(name, password) {
    let newUser = {
        name: name,
        password: password
    }

    return newUser;
}


// Make sure that you export the functions so our Test file can access them
module.exports = { add, subtract, product, divide, isOdd, isEven, addUser }