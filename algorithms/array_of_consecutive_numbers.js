/*

    Challenge: Implement a function that returns an array containing all the consecutive numbers in ascendant order from the given value low up to the given value high(bounds included).

    Example:
    getSequence(1, 5) ➞[1, 2, 3, 4, 5]

    getSequence(98, 100) ➞[98, 99, 100]

    getSequence(1000, 1000) ➞[1000]
*/ 

function getSequence(low, high) {
    let arr = [];

    for (let i = low; i <= high; i++) {
        arr.push(i);
    }
    return arr;
}