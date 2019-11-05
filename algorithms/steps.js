/*

    Challenge: Write a function that accepts a positive number N.
    The function should console log a step shape with N levels using the '#' character. Make sure the step has spaces on levels that are not entirely made up of '#' characters.

    Examples: 
        steps(2)
            '# '
            '##'
        steps(3)
            '#  '
            '## '
            '###'
        steps(4)
            '#   '
            '##  '
            '### '
            '####'
*/      


function steps(n) {
    // We want to make sure that submitted arguments are positive and greater than Zero
    if(n < 1) {
        return "N must be a positive number larger than zero"
    }
    
    // Let's start out with an empty string that we can add to
    let result = '';

    // if we are given N we need to have at least that many spots in our string
    
    // we need a loop to start from 1 up to N
        // * Start with a single # and add N-1 'spaces' to the right
        // * Add consecutive # characters until the number of # characters is equal to N

    // Return from function call
} 