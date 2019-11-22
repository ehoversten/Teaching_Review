/* 

    Challenge: Given an array of items, filter the array to only include Numbers.

    Example: 
    let arr = [1, 2, 'a', 'b'];
    output -> [1, 2];

*/
let arrNum = [1, 2, 'a', 'b'];
let otherArr = [1, 2, "aasf", "1", "123", 123];

function filterArray(arr) {
    let filtered = arr.filter(function(elem) {
        console.log(typeof(elem));
        return typeof(elem) === 'number';
    });

    return filtered;
}


console.log(filterArray(arrNum));
console.log(filterArray(otherArr));