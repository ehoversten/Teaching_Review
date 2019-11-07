/*

    Challenge: Write a function that finds the number of vowels used in a string. Vowels will be characters 'a', 'e', 'i', 'o' and 'u'. Ignore 'y' for this exercise.

    Example: 
        vowels("Hi There");           // output: 3
        vowels("Why do you ask?");    // output: 4

*/


function vowels(str) {
    // Let's create a counting variable
    let count = 0;
    // Let's have an array of our vowel characters to compare against
    let vowelArr = ['a', 'e', 'i', 'o', 'u'];
    // Let's also lowercase the input string so we don't have to compare capital vowel characters also
    let lowerStr = str.toLowerCase();
    
    // Loop through the STRING OBJECT
    for (let i = 0; i < lowerStr.length; i++) {

        // Loop through vowel array
        for(let j = 0; j < vowelArr.length; j++) {
            // - IF character is a vowel (Compare 'str[i]' against elements in vowelArr)
            if(str[i] == vowelArr[j]) {
                // increment count var
                count++;
            }
            // - ELSE do nothing
        }
    }
        // Don't forget to return count!
        return count;
}

console.log(vowels("Hi There"));