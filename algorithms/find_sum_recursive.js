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



// What's happening here?
/*
    // We evoke the sum() function and pass in '5' as the parameter
    sum(5);

    This is when we activly use the 'Call Stack'. This may help visualize what is happening

    -> return   5  +  sum(4)
    -> return           4   +  sum(3)
    -> return                    3   +  sum(2)
    -> return                             2   +  sum(1)
    -> return                                      1   +  sum(0)
    -> return                                               0
    -> return   5   +   4   +    3    +   2    +   1   +    0 
    -> return  15
    
*/
