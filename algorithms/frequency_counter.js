// Building knowledge of the FREQUENCY COUNTER problem solving technique
//    --> The application of this technique is often helpful when turning an ARRAY or 
//        STRING data structure into an OBJECT, and using the object (or HASH TABLE) 
//        data structure (key: value pair) to help solve the problem. Instead of relying
//        on multiple nested loops, which will increase both Time and Space (Big(O)) requirements


// Turning a STRING data structure into an OBJECT
let str_A = "testing";
let str_B = "racecar";

function countLetters(str) {
    // Create and empty object to keep track of the letters in the array and how many times they occur in the given STRING
    let obj = {};
    
    // Loop through the STRING and add the KEY to the OBJECT
    for(let i = 0; i < str.length; i++) {
        // IF the letter in the STRING already EXISTS as a KEY in the OBJECT ...
        if(obj[str[i]]) {
            // INCREMENT the letter(KEY) count value
            obj[str[i]] += 1;
        } else {
            // Create the KEY for the new letter and set an initial value
            obj[str[i]] = 1;
        }
    }
    // Let's take a look at the OBJECT
    console.log("***********")
    console.log(obj);
    console.table(obj);
    // console.log("***********")
}

// countLetters(str_A);
// countLetters(str_B);


// Turning an ARRAY data structure into an OBJECT
let arr_A = [10, 20, 30, 20, 40, 10, 50];

function countNums(arr) {
    // Create an empty OBJECT to store KEY:VALUE pairs
    let obj = {}

    // Loop through the array
    arr.forEach(function(num) {
        // Does the KEY exist?
        if(obj[num]) {
            // Increment count VALUE
            obj[num] += 1;
        } else {
            // Add KEY to OBJ
            obj[num] = 1;
        }
    })
    // Let's check our result
    console.log("#-#-#-#-#-#-#-#-#-#");
    console.table(obj);
}

// -->  Run the Function
// countNums(arr_A);


// Turning two ARRAY's into an OBJECT with key:value pairs
let arr_1 = [1, 2, 3];
let arr_2 = [1, 4, 9];

function areSquares(first, second) {
    // Let's create a quick fail condition to check if the LENGTH of the provided arrays are the same
    if(first.length !== second.length) {
        return false;
    }

    // Create empty OBJECTS 
    let obj_1 = {};
    let obj_2 = {};

    // Loop through each array and load/increment the KEY:VALUE pairs into the new OBJECTS
    first.forEach( num => {
        if(obj_1[num]){
            obj_1[num] += 1
        } else {
            obj_1[num] = 1;
        }
        // TESTING (Watch the object grow as we iterate through the loop)
        // console.log(obj_1)
    });

    // Each loop is only adding O(n) time/space
    second.forEach( num => {
        if(obj_2[num]){
            obj_2[num] += 1
        } else {
            obj_2[num] = 1;
        }
        // TESTING (Watch the object grow as we iterate through the loop)
        // console.log(obj_2)
    });


    // --> TESTING
    console.log("OBJ #1:", obj_1);
    console.log("OBJ #2:", obj_2);
}

// -->  Run the Function
areSquares(arr_1, arr_2);



// Testing Algo
function find2Movies(flightLength, movies){
  // create an object
  let results = {}
  // loop through every movie
  for(let i = 0; i < movies.length; i++){
    // If current movie is inside your object
    if (results[movies[i]]){
      // Then return true
      console.log("true")
      return true 
    }
    // Otherwise, add the movie that would pair with our current
    // movie to our object 
    // We know what that movie's length should be by 
    // subtracting the current movie's length from the flight length 
    let result = flightLength - movies[i]
    console.log("Current Movie: ", movies[i]);
    console.log("Result: ", result);
    results[result] = true
  }
  
  // If you went through the loops and didn't find any movies that 
  // add up EXACTLY to a given flight length, return false
  console.log("false")
  return false
}

// -->  Run the Function
let arr = [20, 30, 110, 40, 50];
let arr_B = [80, 110, 40];
let arr_C = [80, 110, 80];
// find2Movies(160, arr_B);
// find2Movies(160, arr);
// find2Movies(160, arr_C);