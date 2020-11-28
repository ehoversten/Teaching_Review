/* 

Using recursion, write a function which accepts a string and returns a new string in reverse order.

*/ 


function reversal(str) {
    let rvs = [];

    function helper(input) {
        if(input.length === 0) {
            return;
        }

        helper(rvs.push(input[input.length - 1]));        
    }

    helper(str);
    return rvs;
}


reversal("cat");