/* 

    Challenge: Create a function to calculate the determinant of a 2 x 2 matrix. 
    
    Hint: The determinant of the following matrix is: ad - bc

*/

// We are given an 2x2 array matrix in the form... 
// matrix = [ [a, b], [c, d] ]
// We want to find the DETERMINANT -> determinant is [(a * d) - (b * c)]

function calcDeterminant(matrix) {
    let a = matrix[0][0];
    let b = matrix[0][1];
    let c = matrix[1][0];
    let d = matrix[1][1];
    let det = (a * d) - (b * c);

    return det;
}



// Need a little background first...?

/* 
Multi-dimensional arrays:

Arrays can be nested, meaning that an array can contain another array as an element.Using this characteristic of JavaScript arrays, multi-dimensional arrays can be created. 

Ex: 
let matrix_2_x_2 = [ [1, 2] , [5, 3] ]

How do we access the parts of a nested array?
Just like we refer to the INDEX of the array. If we want to grab the value stored in the second spot in the first array, we access the index of the first array using matrix[0] and then we add the INDEX of the ITEM within that array that we are already accessing -> matrix[0][1]

$> console.log(matrix[0][1])  // returns 2
*/

// Simplified Answer
function calcDeterminant(matrix) {

    return (matrix[0][0] * matrix[1][1]) - (matrix[0][1] * matrix[1][0])
}