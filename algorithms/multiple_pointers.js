// Multiple Pointers Pattern


function findPairs(arr) {
    // Create Two pointers references to loop through our ARRAY
    let left = 0;
    let right = arr.length-1;
    
    // Let's see our POINTERS
    console.log(`Left: ${left} || Right: ${right}`);

    // We are starting our pointers on opposite ends, once they land on the same ARRAY INDEX value we exit our loop
    while(left < right) {
        // We want to find pairs that SUM to ZERO
        let sum = arr[left] + arr[right];
        console.log(`Sum is ${sum}`);

        if(sum === 0) {
            console.log("Found Pair: ", [arr[left], arr[right]]);
            return [arr[left], arr[right]]
        }

        if(sum > 0) {
            // Shift right pointer
            right--;
            console.log(`Moving Right Pointer`);
        }
        
        if(sum < 0) {
            // Shift left pointer 
            left++;
            console.log(`Moving Left Pointer`);
        }
    }
}

// --> Test our function
// findPairs([-6, -3, -1, 0, 1, 2, 4, 5]);


//            i
let numArr = [1, 1, 2, 3, 3, 4, 5, 5, 6];  // --> count = 6
//               j 
let numArr_B = [1, 2, 2, 3, 4, 4, 6, 8, 8, 8, 9, 10]; // --> count = 8
// let numArr_C = [1, 1, 1, 1, 1, 2]; // --> count = 2
let numArr_C = [1, 1, 2]; // --> count = 2

// Find unique values Algorithm
function findUnique(arr) {
    // define our pointers
    let left = 0;
    let right = 1;
    // Loop through the given ARRAY
    console.log(`Array length is ${arr.length}`);
    arr.forEach( () => {
        console.log(`Left index: ${left} : Right Index: ${right}`);
        // IF array values are different
        if(arr[left] !== arr[right]) {
            // Increment LEFT pointer
            left++;
            arr[left] = arr[right];
        }
        // IF array values are the same
        if(arr[left] === arr[right]) {
            // Increment RIGHT pointer
            right++;
        }
    })
    console.log(`Count: ${left}`);
    return left;
} 

function findUniqueValues(arr) {
    var i = 0;

    for(var j = 1; j < arr.length - 1; j++) {
        console.log(`i is ${i} : j is ${j}`);
        console.log(`test: ${arr[i]} : ${arr[j]}`);
        if(arr[i] !== arr[j]) {
            console.log("Incrementing");
            i++;
            console.log(`Left is ${i}`);
            arr[i] = arr[j];
        }
    }
    console.log(`Count: ${i + 1}`);
    return i + 1;
}

// findUnique(numArr);
// console.log("**************");
// findUniqueValues(numArr);
// console.log("**************");
// findUnique(numArr_B);
// console.log("**************");
// findUniqueValues(numArr_B);
// console.log("**************");
findUnique(numArr_C);
console.log("**************");
findUniqueValues(numArr_C);