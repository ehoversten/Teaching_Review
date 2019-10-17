/*

    Challenge: Find the Sum up to given number 'n' using recursion

    Example: 
        sum(3) ->  output: 3 + 2 + 1 + 0 = 6
        sum(5) ->  output: 5 + 4 + 3 + 2 + 1 + 0 = 15

*/ 


function sum(n) {
    // Base Case
    if (n == 0) {
        return n;
    }
    // If we don't hit our BASE CASE we return 'n' plus the returned result of our function call (the one we just defined) with a modification to the parameter we pass into our recursive function call. 
    return n + sum(n - 1);
}

console.log(sum(5));
console.log(sum(10));
