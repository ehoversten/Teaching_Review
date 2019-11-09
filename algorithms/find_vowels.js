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
console.log(vowels("Why do you ask?"));

// This solution gives us bad Big 'O' Time Complexity -> O(n^2)


// *** A Better Solution *** //
function betterVowels(str) {
    // Let's create a counting variable
    let count = 0;
    // Let's have an array of our vowel characters to compare against
    let vowelArr = ['a', 'e', 'i', 'o', 'u'];

    // Loop through the STRING OBJECT
    for (let char of str.toLowerCase()) {
        if(vowelArr.includes(char)) {
            count++;
        }
    }
    // Don't forget to return count!
    return count;
}

// This solution gives us better Big 'O' Time Complexity -> O(n)

console.log(betterVowels("Hi There"));
console.log(betterVowels("Why do you ask?"));