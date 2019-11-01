/*

    Challege: Write a function that takes in a number and reverses the order of the digits.

    Examples:
    Input: 1234
    Output:4321

    Input: 1201
    Output:1021

    Input: 4
    Output: 4

*/


var reverseDigit = function (num) {
    var newNum = '';
    var numStr = num.toString();
    for (var i = numStr.length - 1; i >= 0; i--) {
        newNum += numStr[i];
    }

    return parseInt(newNum);
}

//*** Another way to solve the same problem, using the modulo operator ***//

var reverseDigit = function (num) {
    var newNum = 0;
    var lastDigit;
    while (num > 0) {
        lastDigit = num % 10;
        newNum = (newNum * 10) + lastDigit;
        num = parseInt(num / 10);
    }

    return newNum;
}


reverseDigit(1234);
reverseDigit(1202);