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

countLetters(str_A);
countLetters(str_B);


// Turning an ARRAY data structure into an OBJECT




// Turning two ARRAY's into an OBJECT with key:value pairs


