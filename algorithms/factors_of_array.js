/* 


    Challenge: Write a function that returns true if all integers in an array are factors of a number, and false otherwise.

    Examples
    checkFactors([2, 3, 4], 12) ➞ true
    // Since 2, 3, and 4 are all factors of 12.

    checkFactors([1, 2, 3, 8], 12) ➞ false
    // 8 is not a factor of 12.

    checkFactors([1, 2, 50], 100) ➞ true

    checkFactors([3, 6], 9) ➞ false

*/


function checkFactors(arr, num) {
    let passArr = arr.filter(function (elem) {
        return num % elem == 0;
    });

    console.log(passArr);

    if (passArr.length === arr.length) {
        // return true;
        return console.log(true);
    }
    // return false;
    return console.log(false);
}

checkFactors([2, 3, 4], 12);
checkFactors([1, 2, 3, 8], 12);
checkFactors([1, 2, 50], 100);


// Improved version
function betterCheckFactors(factors, num) {
   return [...factors].every(factor => num % factor === 0)
} 