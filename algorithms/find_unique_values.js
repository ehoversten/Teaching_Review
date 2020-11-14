// --> Given an array of SORTED values, find the number of UNIQUE values within the ARRAY


//            i
let numArr = [1, 1, 2, 3, 3, 4, 5, 5, 6];  // --> count = 6
//               j 
let numArr_B = [1, 2, 2, 3, 4, 4, 6, 8, 8, 8, 9, 10]; // --> count = 8

function findUniqueValues(arr) {
    var i = 0;
    console.log(`Array length: ${arr.length}`);
    for(var j = 1; j < arr.length; j++) {
        // console.log(arr);
        // console.log(`i is ${i} : j is ${j}`);
        // console.log(`test: ${arr[i]} : ${arr[j]}`);
        if(arr[i] !== arr[j]) {
            // console.log("Incrementing i");
            i++;
            // console.log(`Left is ${i}`);
            arr[i] = arr[j];
        }
        // console.log("incrementing index j");
    }
    console.log(`Count: ${i + 1}`);
    return i + 1;
}


findUniqueValues([1, 1, 1, 1, 2, 2])
console.log("*********");
findUniqueValues(numArr);
console.log("*********");
findUniqueValues(numArr_B)

