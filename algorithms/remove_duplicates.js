/* 

    Challenge: Write a function that takes in an array of integers and returns the array with duplicates removed

    Example:
    Input: [1,2,2,3]
    Output: [1,2,3]

    Input: [4,5,4,4,7,5]
    Output: [4,5,7]

    Input: [1,2,3,5]
    Output: [1,2,3,5]

*/ 

let input_arr = [1, 2, 2, 3, 3, 4, 5, 5];

// using 'for of' loop construction

function removeDuplicates(arr) {
    let removed = [];
    for(elem of arr) {
        if(!removed.includes(elem)) {
            removed.push(elem);
        }
    }
    return removed;
}

console.log(removeDuplicates(input_arr));



// using traditional for loop construction

function removeDups(arr) {
  let removed = [];
  for (let i = 0; i < arr.length; i++) {
    if (!removed.includes(arr[i])) {
      removed.push(arr[i]);
    }
  }
  return removed;
}

console.log(removeDups(input_arr));