// Write a function called sameFrequency(). Given two positive integers, 
//     determine if the provided numbers have the same frequency of digits

function sameFrequency(num_1, num_2) {
    
    // Create temp OBJECTS
    let obj_1 = {};
    let obj_2 = {};
    
    // Convert each NUMBER data type into a STRING data type
    let str_1 = num_1.toString();
    let str_2 = num_2.toString();
    
    // Fast fail condition - Do the lengths match?
    if(str_1.length !== str_2.length) {
        console.log("Lengths do not match");
        return false;
    }
    // -- TESTING -- //
    console.log(str_1);
    console.log(str_2);
    // console.log(typeof(str_1), typeof(str_2));

    // Loop through each provided number (converted to STRING data type) and load into an OBJECT
    for(let i = 0; i < str_1.length; i++) {
        if(obj_1[str_1[i]]) {
            obj_1[str_1[i]] += 1;
        } else {
            obj_1[str_1[i]] = 1;
        }
    }

    // Loop through each provided number (converted to STRING data type) and load into an OBJECT
    for(let j = 0; j < str_2.length; j++) {
        if(obj_2[str_2[j]]) {
            obj_2[str_2[j]] += 1;
        } else {
            obj_2[str_2[j]] = 1;
        }
    }

    for(num in obj_1) {
        if(obj_1[num] !== obj_2[num]) {
            console.log("Frequencies do not match")
            return false;
        }
        console.log("Frequency Match")
        return true;
    }

    // -- TESTING -- //
    // console.log("Obj 1: ", obj_1);
    // console.log("Obj 2: ", obj_2);
}


sameFrequency(128, 281);
sameFrequency(28, 81);
sameFrequency(28, 811);