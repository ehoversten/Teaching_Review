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


// We can also use RECURSION to solve this type of problem!!

var recFactorial = function(number) {
    // this is often refered to as a 'terminal case' : This is the condition that keeps our function from looping forever
    if (number <= 0) {
        return 1;
    } else { 
        // block to execute
        return (number * recFactorial(number - 1));
    }
};

console.log(recFactorial(3));
console.log(recFactorial(5));
console.log(recFactorial(6));


