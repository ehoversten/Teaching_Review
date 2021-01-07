/*

    Challenge: Write a function that accepts a positive number N.
    The function should console log a step shape with N levels using the '#' character. Make sure the step has spaces on levels that are not entirely made up of '#' characters.

    Examples: 
        pyramid(1)
            '#'

        pyramid(2) 
            ' # '
            '###'

        pyramid(3)  
            '  #  '
            ' ### '
            '#####'
*/   


// rows          n
// columns  (n * 2) - 1

// pyramid(1) -> row = 1 ; column = 1
//     '#'

// pyramid(2) -> row = 2 ; column = 3
//    ' # '
//    '###'

// pyramid(3)  -> row = 3 ; column = 5
//    '  #  '
//    ' ### '
//    '#####'

function pyramid(num) {
    let mid = Math.floor(((2 * num) - 1) / 2);

    for(let row = 0; row < num; row++) {
        let block = '';

        for(let column = 0; column < (num * 2) - 1; column++) {
            if(mid - row <= column && mid + row >= column) {
                block += '#';
            } else {
                block += ' ';
            }
        }
        console.log(block);
    }
}


pyramid(1);
console.log('\n')
pyramid(2);
console.log('\n')
pyramid(3);
console.log('\n')
pyramid(5);