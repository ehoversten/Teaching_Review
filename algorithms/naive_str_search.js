/* 

Exploring usage of the Naive String Search Method/Pattern

*/

function naiveStringSearch(str, pattern) {
    // Define counter for number of times pattern appears in string
    let count = 0;

    // First loop to check characters in the provided string
    for(let i = 0; i < str.length; i++) {
        // Second (inner) loop to compare outer loop characters to pattern characters
        for(let j = 0; j < pattern.length; j++) {
            // -- TEST -- //
            console.log(`${pattern[j]} : ${str[i + j]}`);
            // Check if characters from each loop MATCH (?)
            // We have to add (i and j) together because we are comparing the PATTERN using the INNER loop but need to account for the SHIFT in POSITION from the OUTER loop
            if(pattern[j] !== str[i+j]) {
                // IF not matching then BREAK out of INNER loop
                console.log("BREAK")
                break;
            }
            // IF we get to the end of the PATTERN then we have found a match to the pattern in the provided string input
            if(j === pattern.length - 1) {
                // Increment COUNT variable when a PATTERN MATCH is found
                console.log("Found Match");
                count++;
            }
        }
    }
    // Return number of pattern matches in provided string
    console.log(`Found ${count} matches`);
    return count;
}


naiveStringSearch("bingo binder bingo", "bing");
naiveStringSearch("bingo bi bingo", "to");


