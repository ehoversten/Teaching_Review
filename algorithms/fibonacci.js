/* 

    Challenge: Find the N-th Fibonacci number

    Definition: each number equals the sum of the two numbers before it, and the difference of the two numbers succeeding it

    Example: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, ...    Formula: F(n) = F(n-1) + F(n-2)
            0 + 1 = 1
            1 + 1 = 2
            1 + 2 = 3
            2 + 3 = 5
            3 + 5 = 8
            5 + 8 = 13 ...
*/ 


function fibonacci_1(num) {
    var a = 1, b = 0, temp;

    while (num >= 0) {
        temp = a;
        a = a + b;
        b = temp;
        num--;
    }

    return b;
}

console.log(fibonacci_1(2));
console.log(fibonacci_1(6));
console.log(fibonacci_1(12));

// ------------------------------------------- //

//  How about using Recursion?
function fibonacciRec(num) {
    if (num <= 1) return 1;

    return fibonacciRec(num - 1) + fibonacciRec(num - 2);
}

console.log(fibonacciRec(2));
console.log(fibonacciRec(6));
console.log(fibonacciRec(12));


// ------------------------------------------- //

function fibonacci(n) {
    var fib = [0, 1];

    if (n <= 2) return 1;

    for (var i = 2; i <= n; i++) {
        // Formula: F(n) = F(n-1) + F(n-2)
        fib[i] = fib[i - 1] + fib[i - 2];
    }

    return fib[n];
} 

console.log(fibonacci(2));
console.log(fibonacci(6));
console.log(fibonacci(12));


// ------------------------------------------- //

//  How about using Recursion?
function rFibonacci(n) {
    if (n <= 1)
        return n;
    else
        return rFibonacci(n - 1) + rFibonacci(n - 2);
}

console.log(rFibonacci(2));
console.log(rFibonacci(6));
console.log(rFibonacci(12));