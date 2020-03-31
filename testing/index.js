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


function productOf(a, b) {
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