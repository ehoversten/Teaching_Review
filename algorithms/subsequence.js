/* 

Write a function which takes in two strings and checks whether the characters in the first string form a subsequence of the characters in the second string. In other words, the function should check whether the characters in the first string appear somewhere in the second string, without their order changing. 

*/

function isSubsequence(str_1, str_2) {
    // Create pointers
    let left = 0;
    let right = 0;

    if(str_1.length > str_2.length) {
        console.log("Second string to short to find subsequence");
        return false;
    }

    // Keep looping while we are still have characters to check from the second STRING
    while(right < str_2.length) {
        // -- TESTING -- //
        console.log(`Checking: ${str_1[left]} : ${str_2[right]} `)

        // Test if left pointer character matches right pointer character
        if(str_1[left] === str_2[right]) {
            // Increment Pointers
            left++;
            right++;
        } 
        
        // Left pointer character does not match right pointer character
        if(str_1[left] !== str_2[right]) {
            // Increment Right Pointer
            right++; 
        }

        // Have we reached the end of the first string?
        if(left === str_1.length) {
            console.log("Found matching subsequence");
            return true;
        }

    }
    // We have reached the end of the second string and not found a subsequence
    console.log("No matching subsequence");
    return false
}


isSubsequence("hello", "hello world");
isSubsequence("sing", "string");
isSubsequence("abc", "abracadabra");
isSubsequence("abc", "acb");
isSubsequence("abcd", "acb");