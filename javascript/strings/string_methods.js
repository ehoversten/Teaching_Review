
// Some useful JavaScript String Methods
// Remember that a String in JavaScript is an OBJECT!!!

let string_1 = "Who is your daddy and what does he do?";
let string_2 = "Hello World";
let string_3 = "do wah diddy, diddy dum, diddy do";


// ## .length
//  - This method returns the length of the string
string_1.length;  // output: 38


// ## .charAt(INDEX)
//  - This method returns the character at the supplied INDEX value
string_1.charAt(4);     // output: 'i'


// ## .indexOf()
//  - This method returns the INDEX of the FIRST INSTANCE of the supplied string or character 
string_1.indexOf('d');   // output: 12
string_2.indexOf('World');  // output: 6


// ## .lastIndexOf()
//  - This method returns the INDEX of the LAST INSTANCE of the supplied string or character 
string_1.lastIndexOf('d');   // output: 35
string_3.lastIndexOf('diddy');  // output: 25


// ## .charCodeAt()



// ## .fromCharCode()



// ## .concat()
//  - This method concatenates the string arguments to the calling string and returns a new string
let str_1 = "Hello ";
let str_2 = "World";

let newStr = str_1.concat(str_2);  
console.log(newStr);    // output: 'Hello World'


// ## .endsWith()
//  - This method determines if a string ENDS with the character or characters of a specified string, returns a boolean: true or false
let str_3 = "JavaScript is my jam";
console.log(str_3.endsWith('m'));       // output: true
console.log(str_3.endsWith('jam'));     // output: true
console.log(str_3.endsWith('!'));       // output: false


// ## .startsWith()
//  - This method determines if a string STARTS with the character or characters of a specified string, returns a boolean: true or false
console.log(str_3.startsWith('J'));     // output: true
console.log(str_3.startsWith("j"));     // output: false
console.log(str_3.startsWith("Java"));  // output: true


// ## .includes()
//  - This method returns a Boolean, if the string or character parameter is present in the called String
let includeStr = "I am Iron Man!";
console.log(includeStr.includes('!'));      // output: true
console.log(includeStr.includes('man'));    // output: false
console.log(includeStr.includes('Man'));    // output: true


// ## .match()
//  - This method retrieves the result of matching a string against a regular expression.



// ## .search()



// ## .replace()
//  - This method



// ## .repeat()
//  - This method constructs and returns a new string which contains the specified number of copies of the string on which it was called, concatenated together
let repeatChar = '-';
let repeatedChar = repeatChar.repeat(5);
console.log(repeatedChar);    // output: '-----'

// We can also combine multiple string methods and create new strings.
let str_4 = "How many dashes? ";
let repeatStr = str_4.concat(repeatChar.repeat(5));
console.log(repeatStr);     // output: 'How many dashes? -----'



// ## .split()
//  - This method splits a STRING OBJECT into an ARRAY of strings by separating the string into substrings, using a specified separator string to determine where to make each split.
let splitStr = "Split this string into an array";
// here we are using the spaces between words as our delimiter
let splitArr = splitStr.split(' '); 
console.log(splitArr)   // output: ['Split', 'this', 'string', 'into', 'an', 'array'];

let commaStr = "Hey there, Hi there, Ho there"
// here we use the comma (", ") as our demiliter
let commaArr = commaStr.split(', ');
console.log(commaArr);   // output: ['Hey there', 'Hi there', 'Ho there']



// ## .slice(START_INDEX, *END_INDEX*)
//  - This method takes a section of the calling string defined by the START_INDEX parameter to the END_INDEX parameter. The END_INDEX parameter is *optional* , If no end index is supplied it will continue until the end of the string.
let sliceMe = "Take this string and slice it!";
console.log(sliceMe.slice(21, 26));    // output: 'slice'
console.log(sliceMe.slice(21));        // output: 'slice it!'



// ## .substring()
//  - This method returns the part of the string between the start and end indexes, or to the end of the string. This method is similar to STRING.slice()
let subStr = "Take part of this string";
console.log(subStr.substring(5));       // output: 'part of this string'
console.log(subStr.substring(5, 17));   // output: 'part of this'



// ## .toUpperCase()
//  - This method returns the calling string value converted to uppercase
let uppercaseMe = "i wish i was big";
console.log(uppercaseMe.toUpperCase());


// ## .toLowerCase()
//  - This method returns the calling string value converted to lowercase
let makeMeSmall = "I WANT to BE SMALL"
console.log(makeMeSmall.toLowerCase());



// ## .trim()
//  - This method trims the extra whitespace from the front and/or end of a string
let spaces = " Ends with spaces    ";
let moreSpaces = "    Starts and ends with spaces   ";
console.log(spaces);
console.log(spaces.trim());
console.log(moreSpaces);
console.log(moreSpaces.trim());


/*

    A few resources:
    

*/