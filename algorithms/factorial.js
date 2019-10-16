/*

    Challenge: Find the factorial of a given integer

    Definition of Factorial: the product of an integer and all the integers below it

    Example: 
        
        Factorial(6) -> 6 * 5 * 4 * 3 * 2 * 1 = 720
        Factorial(10) -> 10 * 9 * 8 * 7 * 6 * 5 * 4 * 3 * 2 * 1 = 362880
*/


function factorial(num) {
    // Why set sum equal to 1 to start? -> We are multiplying, if we start with sum = 0 we will always return ZERO
    let sum = 1;
    for(let i = num; i > 0; i--) {
        sum = sum * i;
    }
    return sum
}

console.log(factorial(6));
console.log(factorial(10));