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

function steps(num) {
    // We want to make sure that submitted arguments are positive and greater than Zero
    if (num < 1) {
        return "N must be a positive number larger than zero"
    }

    // Iterate through number of rows
    for(let row = 0; row < num; row++) {
        // create a empty string variable to start
        let result = '';
        // Iterate through number of columns
        for(let column= 0; column < num; column++) {
            // IF current column is less than or equal to total rows
            if(column <= row) {
                // add '#' to result
                result += '#';
            } else {
                // add ' ' (empty space) to result
                result += ' ';
            }
        }
        // Log the row result 
        console.log(result);
    }
}

steps(2);
console.log('\n');

steps(5);

