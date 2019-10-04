
/* 
    Challenge: 
    - Create a function that takes in an array of numbers and returns the sum of its cubes.
    - If given an empty array, return 0.

    Example output:
        sumOfCubes([3, 4, 5]) ➞ 216
        sumOfCubes([2]) ➞ 8
        sumOfCubes([]) ➞ 0
*/

let numsArr = [1, 5, 9];

function sumOfCubes(nums) {
    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
        sum += Math.pow(nums[i], 3);
        console.log(`sum is ${sum}`);
    }
    return sum;
}

console.log(sumOfCubes(numsArr));