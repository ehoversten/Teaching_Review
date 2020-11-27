/* 

Write a function called power which accepts a base and an exponent. The function should return the power of the base to the exponent. This function should mimic the functionality of Math.pow() - do not worry about negative bases and exponents.

*/


function power(base, exponent) {
    // Outlier Case where exponent is zero
    if(exponent === 0) {
        return 1;
    }

    // Define Base Case
    if(exponent === 1) {
        console.log("Hit Base Case");
        return base;
    }
    // Figure out our recursive functionality. In this case we are defining our exit condition based on our EXPONENT variable hitting a value of one. Once our EXPONENT variable hits one we return all the values being stored within the CALL STACK and multiply them together to find our final answer.
    return base * power(base, exponent - 1);
}

// -- TESTING -- //
let powFive = power(2, 2);
console.log(powFive);
let powTen = power(2, 10);
console.log(powTen);
let powFour = power(2, 4);
console.log(powFour);
let powZero = power(2, 0);
console.log(powZero);

