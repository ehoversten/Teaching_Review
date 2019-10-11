
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



// ## .search()



// ## .replace()



// ## .repeat()



// ## .slice()



// ## .split()



// ## .substr()



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